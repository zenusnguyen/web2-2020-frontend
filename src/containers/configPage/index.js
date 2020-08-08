import React, { useEffect, useState } from "react";
import MaganerAccountStyled, { ConfigRowStyled } from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import Search from "../../assets/search.svg";
import InputForm from "../../components/InputForm";
import SideMenu from "../../components/SideMenu";
import CustomerCard from "../../components/CustomerCard";
import axios from "axios";
import CustomerDetailPage from "../CustomerDetailPage";

function ConfigRow(props) {
  return (
    <ConfigRowStyled>
      <div className="title">{props.title} </div>
      <div className="containerInput">
        <InputForm title={props.title1}></InputForm>
        <InputForm title={props.title2}></InputForm>
        <InputForm title={props.title3}></InputForm>
      </div>
    </ConfigRowStyled>
  );
}

export default function MaganeAccount() {
  const temp = [];
  const [data, setData] = useState(temp);

  const [isDetail, setIsDetail] = useState(false);

  const [styled2, setStyled2] = useState("none");
  const [cardInfo, setcardInfo] = useState("");
  const [state, setState] = useState("detail");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        "http://localhost:1337/users-permissions/users-active"
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  const HandlerClick = (items) => {
    setcardInfo(items);
    setState("card");
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div className="titleWithButton">
          <p className="SignInTitle"> Configuration</p>
        </div>
        <ConfigRow
          title="Single payment spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>
        <ConfigRow
          title="Daily spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>
          Savings annual interest rates
        </p>
        <div className="dualConfig">
          <InputForm title="Term" Right="7%"></InputForm>
          <InputForm title="Rate (%)"></InputForm>
        </div>
        <Button
          Left="0px"
          title="Save"
          Width="190px"
          BackgroundColor="blue"
        ></Button>
      </div>
    </MaganerAccountStyled>
  );
}
