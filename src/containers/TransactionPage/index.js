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
import { config } from "../../configs/server";
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
        `${config.server}/transaction-logs-by-account?account_id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  const handleClick = async () => {
    const result = await axios.get(
      `${
        config.server
      }/transaction-logs-filter?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&type=${type}&account_id=${
        JSON.parse(localStorage.getItem("userAccount")).id
      }`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setData(result.data);
  };

  function RenderHistory() {
    return data.map((items) => (
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
  const transactionTypes = [
    { label: "All types", value: "all" },
    { label: "Transfer", value: "transfer" },
    { label: "Deposit", value: "deposit" },
    { label: "Withdraw", value: "withdraw" },
  ];

  return (
    <TransactionHistoryPage>
      <SideMenu></SideMenu>

      <div className="containerForm">
        <p className="pageTitle">Transactions history</p>
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
            {/* <img src={Calendar}></img> */}
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
            {/* <img src={Calendar}></img> */}
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
    </TransactionHistoryPage>
  );
}
