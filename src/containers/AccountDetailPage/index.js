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
import {config} from "../../configs/server"
function RenderHistory() {
  const [data, setData] = useState([]);
  return data.map((item) => (
    <HistoryCard
      key={item.key}
      TransferType={item.TransferType}
      Date={item.Date}
      Amount={item.Amount}
      RemainingBalance={item.RemainingBalance}
    ></HistoryCard>
  ));
}

export default function AccountDetail(props) {
  const { cardInfo } = props;
  console.log("cardInfo: ", cardInfo);
  let historys = useHistory();
  const alert = useAlert();
  const [history, setHistory] = useState([]);
  const [term, setTerm] = useState([{}, {}]);
  // ${config.server}/term-deposits-by-account?id=18
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/term-deposits-by-account?id=${cardInfo.term_deposit_id}`
      );
      setTerm(result.data);
    }
    if (cardInfo.card_type === "saving") {
      Fecth();
    }
  }, [cardInfo.id]);

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
      `${config.server}/transaction-logs-filter?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&type=${type}`
    );
    setHistory(result.history);
  };
  const handleBlock = async () => {
    const block = await axios
      .put(`${config.server}/spend-accounts/${cardInfo.id}`, {
        status: "block",
      })
      .then((result) => {
        alert.success("Action success");

        setTimeout(function () {
          historys.go(0);
        }, 1500);
      })
      .catch((err) => {
        alert.error("Action Error");
      });
  };

  const handleUnBlock = async () => {
    const block = await axios
      .put(`${config.server}/spend-accounts/${cardInfo.id}`, {
        status: "active",
      })
      .then((result) => {
        alert.success("Action success");

        setTimeout(function () {
          historys.go(0);
        }, 1500);
      })
      .catch((err) => {
        alert.error("Action Error");
      });
  };

  const RenderButton = () => {
    if (cardInfo.status === "active") {
      return (
        <button onClick={handleBlock} className="blockButton">
          Close account
        </button>
      );
    } else if (
      JSON.parse(localStorage.getItem("userAccount")).role.name === "admin"
    ) {
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
          <div className="selectInput">
            <p>Transaction type</p>
            <Select
              options={transactionTypes}
              onChange={(e) => setType(e.value)}
              defaultValue={{ label: "All types", value: "all" }}
            />
          </div>
          <MyDatePickerStyle>
            <div>
              <p>Start date</p>
              <DatePicker
                selected={fromDate}
                onChange={(e) => setFromDate(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
          <MyDatePickerStyle>
            <div>
              <p>End date</p>
              <DatePicker
                selected={toDate}
                onChange={(e) => setToDate(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
          <button
            onClick={handleClick}
            className="filterButton"
            style={{ marginTop: "28px" }}
          >
            Apply
          </button>
        </span>
        <RenderHistory></RenderHistory>
      </div>
    </AccountDetailPage>
  );
}
