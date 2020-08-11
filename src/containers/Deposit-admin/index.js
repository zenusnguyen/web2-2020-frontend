import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import { DepositStyled, Register } from "./styled";
import Back from "../../assets/back.svg";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Select from "react-select";
import * as _ from "lodash";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import {config} from "../../configs/server"
export default function Deposit(props) {
  let history = useHistory();
  const alert = useAlert();
  const [listSpend, setListSpend] = useState([]);
  const [spendAccounts, setSpendAccount] = useState([]);
  const [cardID, setCardID] = useState("");
  const [amount, setAmount] = useState(0);

  const [remark, setRemark] = useState("");

  let spendAccountsArray = [];

  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/spend-accounts-by-owneraccount?id=${props.accountInfo.id}`
      );
      setListSpend(result.data);
      _.forEach(result.data, (item) => {
        if (item.status === "active") {
          spendAccountsArray.push({
            label: `${item.card_number}`,
            value: `${item.card_number}`,
          });
        }
      });
      setSpendAccount(spendAccountsArray);
    }
    Fecth();
  }, []);
  async function handleDeposit(cardID, amount, remark) {
    const result = await axios
      .post(`${config.server}/spend-accounts-deposit`, {
        remark: remark,
        amount: amount,
        beneficiaryAccount: cardID,
      })
      .then((response) => {
        alert.success("Action success");

        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => alert.error("Action Error"));
  }

  return (
    <DepositStyled>
      <SideMenu></SideMenu>
      <div className="containerDeposit">
        <div onClick={props.onClick} className="back">
          <img src={Back}></img>
          {props.backTitle || "Nguyễn Việt Anh"}
        </div>
        <div className="titleWithButton">
          <p className="pageTitle">{props.userName || "Deposit"}</p>
        </div>
        <div className="selectAccount">
          <p>Select an account</p>
          <Select
            onChange={(e) => setCardID(e.value)}
            style={{ height: "100%", fontSize: "16px", fontWeight: "500" }}
            options={spendAccounts}
          />
        </div>
        <InputForm
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          title="Amount"
          name={"balance"}
        ></InputForm>

        <TextArea
          onChange={(e) => setRemark(e.target.value)}
          type="text"
          title="Remark "
          name={"remark"}
        ></TextArea>
        <Button
          onClick={() => {
            handleDeposit(cardID, amount, remark);
          }}
          Top="55px"
          Width="190px"
          title="Deposit"
          BackgroundColor={"#4F6EF6"}
        ></Button>
      </div>
    </DepositStyled>
  );
}
