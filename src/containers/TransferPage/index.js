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
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
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
        <div>
          <InputForm
            defaultValue={0}
            value={0}
            type="number"
            title="Available Balance"
            name={"balance"}
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
            type="text"
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
