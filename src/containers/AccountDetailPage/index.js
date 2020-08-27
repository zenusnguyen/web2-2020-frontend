import React, { useEffect, useState } from "react";
import AccountDetailPage from "./styled";
import SideMenu from "../../components/SideMenu";
import AccountCard from "../../components/AccountCard";
import HistoryCard from "../../components/HistoryCard";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { MyDatePickerStyle } from "./styled";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Back from "../../assets/back.svg";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import * as _ from "lodash";
import { config } from "../../configs/server";

export default function AccountDetail(props) {
  const { cardInfo } = props;

  let historys = useHistory();
  const alert = useAlert();
  const [historyLog, setHistoryLog] = useState([]);
  const [term, setTerm] = useState([{}, {}]);
  const [listSpend, setListSpend] = useState([]);
  const [beneficiaryAccount, setBeneficiaryAccount] = useState(null);
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/term-deposits-by-account?id=${cardInfo.term_deposit_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTerm(result.data);
      let spendAccountsArray = [];
      async function FecthSpendAccount() {
        const result = await axios.get(
          `${config.server}/spend-accounts-by-owneraccount?id=${cardInfo.account_id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        _.forEach(result.data, (item) => {
          if (item.status === "active" && item.card_type === "spend") {
            spendAccountsArray.push({
              label: `${item.card_number}`,
              value: `${item.card_number}`,
            });
          }
          setListSpend(spendAccountsArray);
        });
      }
      FecthSpendAccount();
    }
    if (cardInfo.card_type === "saving") {
      Fecth();
    }
    async function FecthLogs() {
      const result = await axios.get(
        `${config.server}/transaction-logs-by-card?id=${cardInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setHistoryLog(result.data);
    }
    FecthLogs();
    // transaction-logs-by-card
  }, [cardInfo.id]);

  function RenderHistory() {
    return historyLog.map((items) => (
      <HistoryCard
        account={items.from_account}
        id={items.id}
        unit={items.unit}
        TransferType={items.transaction_type}
        Date={items.created_at}
        Amount={items.amount}
        RemainingBalance={items.remaining_balance}
        remark={items.remark}
      ></HistoryCard>
    ));
  }

  const tempDate = new Date();
  const [fromDate, setFromDate] = useState(
    new Date(
      tempDate.getFullYear().toString(),
      tempDate.getMonth().toString(),
      tempDate.getDate().toString(),
      "0",
      "0",
      "0"
    )
  );
  const [toDate, setToDate] = useState(new Date("2020/12/31"));
  const [type, setType] = useState("all");
  // const [cardID, setID] = useState("all");

  const transactionTypes = [
    { label: "All types", value: "all" },
    { label: "Transfer", value: "transfer" },
    { label: "Deposit", value: "deposit" },
  ];

  const handleClick = async () => {
    const result = await axios.get(
      `${
        config.server
      }/transaction-logs-filter-by-account?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&type=${type}&accountNumber=${
        cardInfo.id
      }`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setHistoryLog(result.data);
  };
  const handleBlock = async () => {
    const block = await axios
      .put(
        `${config.server}/spend-accounts/${cardInfo.id}`,
        {
          status: "block",
          closed_date: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        alert.success("Action success");

        setTimeout(function () {
          historys.go(0);
        }, 1500);
      })
      .catch((err) => {
        alert.error("Action error please check again!");
      });
  };

  const handleClose = async () => {
    let beneficiaryAccount2 = null;
    confirmAlert({
      title: "Close account",
      message: (
        <div className="selector">
          <p style={{ fontWeight: "600", fonSize: "32px", lineHeight: "150%" }}>
            Select a Spend account to continue
          </p>
          <Select
            options={listSpend}
            onChange={(e) => (beneficiaryAccount2 = e.value)}
            // defaultValue={{ label: listSpend[0], value: listSpend[0] }}
          />
        </div>
      ),

      buttons: [
        {
          label: "Cancel",
          onClick: () => {},
        },
        {
          label: "Done",
          onClick: () => handleBlockAccount(beneficiaryAccount2),
        },
      ],
    });
  };

  const handleBlockAccount = async (beneficiaryAccount2) => {
    if (beneficiaryAccount2 === null) {
      alert.error("Please choose beneficiary account");
    } else {
      await axios
        .post(
          `${config.server}/spend-accounts-fromsaving`,
          {
            currentAccount: _.get(cardInfo, "card_number"),
            remark: "transfer from saving",
            amount: _.get(cardInfo, "balance"),
            beneficiaryAccount: beneficiaryAccount2,

            // otp: "1998",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (response) {
          if (response.status === 200) {
            alert.success("Transfer Successful");
          }
        })
        .catch((error) => {
          console.log("error: ", error);
          alert.error("sometime when wrong ");
        });
      const block = await axios
        .put(
          `${config.server}/spend-accounts/${cardInfo.id}`,
          {
            status: "closed",
            closed_date: new Date(),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((result) => {
          alert.success("Action success");

          setTimeout(function () {
            historys.go(0);
          }, 1500);
        })
        .catch((err) => {
          alert.error("Action error please check again!");
        });
    }
  };
  const handleUnBlock = async () => {
    const block = await axios
      .put(
        `${config.server}/spend-accounts/${cardInfo.id}`,
        {
          status: "active",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        alert.success("Action success");

        setTimeout(function () {
          historys.go(0);
        }, 1500);
      })
      .catch((err) => {
        alert.error("Action error please check again!");
      });
  };

  const RenderButton = () => {
    if (cardInfo.card_type == "saving" && cardInfo.status != "closed") {
      return (
        <button onClick={handleClose} className="blockButton">
          Close account
        </button>
      );
    }
    if (cardInfo.status === "active") {
      return (
        <button onClick={handleBlock} className="blockButton">
          Block account
        </button>
      );
    } else if (cardInfo.status === "block") {
      return (
        <button onClick={handleUnBlock} className="unblockButton">
          Unlock account
        </button>
      );
    }
  };

  return (
    <AccountDetailPage>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div onClick={props.onClick} className="back">
          <img src={Back}></img>
          Manage accounts
        </div>
        <div className="titleWithButton2">
          <p className="pageTitle">{cardInfo.card_number}</p>
          <div className="accountButton">{RenderButton()}</div>
        </div>
        <p className="itemTitle">Information</p>
        <AccountCard
          Term={_.get(term[1], "period")}
          AccountNumber={cardInfo.card_number}
          CurrentBalance={
            _.get(cardInfo, "balance") || 0
          }
          Status={cardInfo.status}
          Spend_type={cardInfo.spend_type}
          Card_type={cardInfo.card_type}
          InterestRate={_.get(term[1], "interest_rate")}
          MaturityDate={_.get(term[0], "maturity_date")}
          close_date={_.get(cardInfo, "closed_date")}
        ></AccountCard>
        <p className="itemTitle">History</p>
        <span className="filterSection">
          <div className="selectInput child">
            <p>Transaction type</p>
            <Select
              options={transactionTypes}
              onChange={(e) => setType(e.value)}
              defaultValue={{ label: "All types", value: "all" }}
            />
          </div>
          <MyDatePickerStyle>
            <div className="child customDatePickerWidth">
              <p>Start date</p>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={fromDate}
                onChange={(e) => setFromDate(e)}
              ></DatePicker>
            </div>
          </MyDatePickerStyle>
          <MyDatePickerStyle>
            <div className="child customDatePickerWidth">
              <p>End date</p>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={toDate}
                onChange={(e) => setToDate(e)}
              ></DatePicker>
            </div>
          </MyDatePickerStyle>
          <div className="child1">
            <button
              onClick={handleClick}
              className="filterButton"
              style={{ marginTop: "28px" }}
            >
              Apply
            </button>
          </div>
        </span>
        <RenderHistory></RenderHistory>
      </div>
    </AccountDetailPage>
  );
}
