import React, { Component, useEffect, useState } from "react";
import TransactionHistoryPage from "./styled";
import SideMenu from "../../components/SideMenu";
import HistoryCard from "../../components/HistoryCard";
import Select from "react-select";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";
import axios from "axios";
import * as _ from "lodash";
export default function TransactionHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`
      );
      setData(result.data);
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
    <TransactionHistoryPage>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <p className="pageTitle">Transactions history</p>
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
        <HistoryCard
          TransferType="Transfer"
          Date="01/07/2020 10:55 AM"
          Amount="-1000000"
          RemainingBalance="4250000"
        ></HistoryCard>
      </div>
    </TransactionHistoryPage>
  );
}
