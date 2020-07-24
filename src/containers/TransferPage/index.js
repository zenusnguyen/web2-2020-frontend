import React, { Component, useState } from "react";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import TransferStyled from "./styled";
import moment from "moment";
import axios from "axios";

export default function TransferPage() {
  const techCompanies = [
    { label: "Bank 1", value: 1 },
    { label: "Bank 2", value: 2 },
    { label: "Bank 3", value: 3 },
    { label: "Bank 4", value: 4 },
    { label: "Bank 5", value: 5 },
    { label: "Bank 6", value: 6 },
  ];
  const spendAccounts = [
    { label: "123456 - Nguyen Van A", value: 1 },
    { label: "123452 - Nguyen Van B", value: 2 },
    { label: "123453 - Nguyen Van C", value: 3 }
   
  ];
  //   const HandlerClick =
  const [isExtra, SetIsExtra] = useState("none");
  return (
    <TransferStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <h3 className="title">Transfer funds</h3>
        <br />
        <div>
          <p>Transfer tyle </p>
          <input
            onChange={(e) => SetIsExtra("none")}
            defaultChecked
            type="radio"
            name="transferstyle"
            defaultValue="intra"
          />{" "}
          Intra-bank transfer (Same bank)
          <br />
         
          <input
            onChange={(e) => SetIsExtra("")}
            type="radio"
            name="transferstyle"
            defaultValue="inter"
          />{" "}
          Inter-bank transfer (Across banks)
        </div>
        <br />
        <div className="extraBanking" style={{ display: isExtra }}>
            <p>Select a Spend account</p>
            <Select style={{ height: "100%" }} options={spendAccounts} />
          </div>
          <br />
        <div>
          <InputForm
            defaultValue={0}
            value={"20,000,000"}
            type="text"
            title="Available Balance"
            name={"balance"}
            readonly = {"readonly"}
          ></InputForm>
          <InputForm
            defaultValue={""}
            value={""}
            type="text"
            title="Beneficiary account"
            name={"bankaccount"}
            placeholder={"Enter account number"}
          ></InputForm>
          <div className="extraBanking" style={{ display: isExtra }}>
            <p>Beneficiary bank</p>
            <Select style={{ height: "100%" }} options={techCompanies} />
          </div>
          <InputForm
            defaultValue={0}
            value={0}
            type="number"
            title="Amount"
            name={"amount"}
            placeholder={"Enter amount"}
          ></InputForm>
          <TextArea
            value={"Tien HP"}
            type="text"
            title="Remark "
            name={"remark"}
          ></TextArea>
          <Button
            Width="190px"
            title="Transfer"
            BackgroundColor={"#4F6EF6"}
          ></Button>
        </div>
      </div>
    </TransferStyled>
  );
}
