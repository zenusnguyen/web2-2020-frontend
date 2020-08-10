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

import * as _ from "lodash";

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

  const [history, setHistory] = useState([]);
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`
      );
      setHistory(result.data);
    }
    Fecth();
  }, []);

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
      `http://localhost:1337/transaction-logs-filter?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&type=${type}`
    );
    setHistory(result.history);
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
          <div className="accountButton">
            <button onClick={handleClick} className="blockButton">
              Close account 
            </button>
          </div>
        </div>
        <p className="itemTitle">Information</p>
        <AccountCard
          Term={cardInfo.term_deposit_id}
          AccountNumber={cardInfo.card_number}
          CurrentBalance={cardInfo.balance || 0}
          Status={cardInfo.status}
          Spend_type={cardInfo.spend_type}
          Card_type={cardInfo.card_type}
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
