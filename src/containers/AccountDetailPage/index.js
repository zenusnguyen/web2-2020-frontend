import React, { Component, useEffect, useState } from "react";
import AccountDetailPage from "./styled";
import SideMenu from "../../components/SideMenu";
import AccountCard from "../../components/AccountCard";
import HistoryCard from "../../components/HistoryCard";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { MyDatePickerStyle } from "./styled";
import Calendar from "../../assets/calendar.png";
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
  // ${config.server}/term-deposits-by-account?id=18
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
        unit={items.unit}
        TransferType={items.transaction_type}
        Date={items.created_at}
        Amount={items.amount}
        RemainingBalance={items.remaining_balance}
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
  console.log("cardInfo: ", cardInfo);
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
    console.log("result: ", result.data);
    setHistoryLog(result.data);
  };
  const handleBlock = async () => {
    const block = await axios
      .put(
        `${config.server}/spend-accounts/${cardInfo.id}`,
        {
          status: "block",
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
          UnBlock account
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
            _.get(cardInfo, "balance") + " " + cardInfo.currency_unit || 0
          }
          Status={cardInfo.status}
          Spend_type={cardInfo.spend_type}
          Card_type={cardInfo.card_type}
          InterestRate={_.get(term[1], "interest_rate")}
          MaturityDate={_.get(term[0], "maturity_date")}
          // TotalInterest=
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
