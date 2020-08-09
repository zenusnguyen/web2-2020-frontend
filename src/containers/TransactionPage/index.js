import React, { Component, useEffect, useState } from "react";
import TransactionHistoryPage from "./styled";
import SideMenu from "../../components/SideMenu";
import HistoryCard from "../../components/HistoryCard";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { MyDatePickerStyle } from "./styled";
import Button from "../../components/Button";
import Calendar from "../../assets/calendar.png";
import axios from "axios";
import * as _ from "lodash";
export default function TransactionHistory() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/transaction-logs-by-account?account_id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  const handleClick = async () => {
    const result = await axios.get(
      `http://localhost:1337/transaction-logs-filter?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&type=${type}`
    );

    setData(result.data);
  };

  function RenderHistory() {
    return data.map((items) => (
      <HistoryCard
        TransferType={items.transaction_type}
        Date={items.created_at}
        Amount={items.amount}
        RemainingBalance={items.remaining_balance}
      ></HistoryCard>
    ));
  }
  const transactionTypes = [
    { label: "All types", value: "all" },
    { label: "Transfer", value: "transfer" },
    { label: "Deposit", value: "deposit" },
  ];

  return (
    <TransactionHistoryPage>
      <SideMenu></SideMenu>

      <div className="containerForm">
        <p className="pageTitle">Transactions history</p>
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
    </TransactionHistoryPage>
  );
}
