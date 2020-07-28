import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import Search from "../../assets/search.svg";
import SideMenu from "../../components/SideMenu";
import CustomerCard from "../../components/CustomerCard";
import axios from "axios";
import CustomerDetailPage from "../CustomerDetailPage";

export default function MaganeAccount() {
  const temp = [];
  const [data, setData] = useState(temp);

  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  const [cardInfo, setcardInfo] = useState("");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(`http://localhost:1337/users`);
      setData(result.data);
    }
    Fecth();
  }, []);
  console.log("data: ", data);
  function ShowDetail(cardInfo) {
    return (
      <CustomerDetailPage
        data={cardInfo}
        backImg="../../assets/back.svg"
        backTitle="All customers"
        onClick={HandlerClick}
      ></CustomerDetailPage>
    );
  }
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

  const HandlerClick = (items) => {
    setcardInfo(items);
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
    return data.map((items, index) => (
      <CustomerCard
        onClick={() => {
          HandlerClick(items);
        }}
        key={index}
        email={items.email}
        username={items.username}
        Status={items.status}
        Created={items.created_date}
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
        {ShowDetail(cardInfo)}
      </div>
    </MaganerAccountStyled>
  );
}
