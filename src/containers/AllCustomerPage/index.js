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

  const HandlerClick = (items) => {
    setcardInfo(items);
    setState("card");
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
  if (state === "detail") {
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
        {/* <div className="detailCard">
        {ShowDetail(cardInfo)}
      </div> */}
      </MaganerAccountStyled>
    );
  } else {
    return (
      <CustomerDetailPage
        data={cardInfo}
        backImg="../../assets/back.svg"
        backTitle="All customers"
        onClick={() => {
          setState("detail");
        }}
      ></CustomerDetailPage>
    );
  }
}
