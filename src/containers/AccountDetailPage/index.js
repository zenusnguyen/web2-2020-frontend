import React, { Component, useEffect, useState } from "react";
import AccountDetailPage from "./styled";
import SideMenu from "../../components/SideMenu";
import AccountCard from "../../components/AccountCard";
import HistoryCard from "../../components/HistoryCard";
import Select from "react-select";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";
import Back from "../../assets/back.svg";
import axios from "axios";

import * as _ from "lodash";
const DATA = [
  {
    key: 1,
    TransferType: "Transfer",
    Date: "01/07/2020 10:55 AM",
    Amount: "+1000000",
    RemainingBalance: "4250000",
  },
  {
    key: 2,
    TransferType: "Transfer",
    Date: "01/07/2020 10:55 AM",
    Amount: "-1000000",
    RemainingBalance: "4250000",
  },
  {
    key: 3,
    TransferType: "Transfer",
    Date: "01/07/2020 10:55 AM",
    Amount: "+1000000",
    RemainingBalance: "4250000",
  },
  {
    key: 4,
    TransferType: "Transfer",
    Date: "01/07/2020 10:55 AM",
    Amount: "-1000000",
    RemainingBalance: "4250000",
  },
];

function RenderHistory() {
  return DATA.map((item) => (
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

  const [cardData, setCardData] = useState("");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`
      );
      setCardData(result.data);
    }
    Fecth();
  }, []);
  const transactionTypes = [
    { label: "All types", value: 1 },
    { label: "Transfer", value: 2 },
    { label: "Deposit", value: 3 },
  ];
  const statuses = [
    { label: "All statuses", value: 1 },
    { label: "Successful", value: 2 },
    { label: "Failed", value: 3 },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2020/12/31"));

  return (
    <AccountDetailPage>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div onClick={props.onClick} className="back">
          <img src={Back}></img>
          Manage accounts
        </div>
        <p className="pageTitle">{cardInfo.card_number}</p>

        <p className="itemTitle">Information</p>
        <AccountCard
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
              defaultValue={{ label: "All types", value: "1" }}
            />
          </div>
          <div className="selectInput">
            <p>Status</p>
            <Select
              options={statuses}
              defaultValue={{ label: "All statuses", value: "1" }}
            />
          </div>
          <MyDatePickerStyle>
            <div>
              <p>Start date</p>
              <DatePicker
                selected={startDate}
                onChange={(e) => setStartDate(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
          <MyDatePickerStyle>
            <div>
              <p>End date</p>
              <DatePicker
                selected={endDate}
                onChange={(e) => setEndDate(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
        </span>
        <RenderHistory></RenderHistory>
      </div>
    </AccountDetailPage>
  );
}
