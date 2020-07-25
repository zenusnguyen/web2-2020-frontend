import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import Search from "../../assets/search.svg";
import SideMenu from "../../components/SideMenu";
import CustomerCard from "../../components/CustomerCard";
import axios from "axios";
import CustomerDetailPage from "../CustomerDetailPage";
function ShowDetail(HandlerClick) {
  return (
    <CustomerDetailPage
    userName="Nguyen Viet Anh"
      backImg="../../assets/back.svg"
      backTitle="All customers"
      onClick={HandlerClick}
    ></CustomerDetailPage>
  );
}

export default function MaganeAccount() {
  const temp = [];
  const [data, setData] = useState(temp);

  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  const temp2 = [{}, {}];
  useEffect(() => {
    async function Fecth() {
      const result = await axios.post(
        "http://localhost:1337/spend-accounts/findByAccount",
        {
          account_id: JSON.parse(localStorage.getItem("userAccount")).id,
        }
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  data.forEach((item) => {
    if (item.SpendType === "1") {
      item.SpendType = "Silver";
    } else if (item.type === "2") {
      item.SpendType = "Gold";
    } else {
      item.SpendType = "Platinum";
    }
  });

  const HandlerClick = (items) => {
    if (isDetail) {
      setStyled("");
      setStyled2("none");
      setIsDetail(!isDetail);
    } else {
      setIsDetail(!isDetail);
      setStyled("none");
      setStyled2("");
    }
  };

  const RenderCard = () => {
    return temp2.map((items) => (
      <CustomerCard
        onClick={() => {
          HandlerClick((items = items.card_number));
        }}
        key={items.key}
        Number={items.card_number}
        SpendType={items.SpendType}
        Status={items.status}
        Created={items.created_date}
        TypeCard={items.TypeCard}
      ></CustomerCard>
    ));
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm" style={{ display: styled }}>
        <div className="titleWithButton">
          <p className="SignInTitle"> All customers </p>
          <div className="searchBar">
            <img src={Search}></img>
            <input placeholder="Search" type="text"></input>
          </div>
        </div>
        <div className="listCard">
          <RenderCard></RenderCard>
        </div>
      </div>
      <div className="detailCard" style={{ display: styled2 }}>
        {ShowDetail(HandlerClick)}
      </div>
    </MaganerAccountStyled>
  );
}
