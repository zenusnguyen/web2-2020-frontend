import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import axios from "axios";
import DetailCard from "../AccountDetailPage";
function ShowDetail(HandlerClick) {
  return <DetailCard onClick={HandlerClick}></DetailCard>;
}

export default function MaganeAccount() {
  const temp = [];
  const [data, setData] = useState(temp);

  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
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
    console.log("items: ", items);
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
    return data.map((items) => (
      <Card
        onClick={() => {
          HandlerClick((items = items.card_number));
        }}
        key={items.key}
        Number={items.card_number}
        SpendType={items.SpendType}
        Status={items.status}
        Created={items.created_date}
        TypeCard={items.TypeCard}
      ></Card>
    ));
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm" style={{ display: styled }}>
        <div className="titleWithButton">
          <p className="SignInTitle"> Manage accounts</p>
          <Link to="/create">
            <Button
              key="1"
              Top="0px"
              title="Add account"
              Width="187px"
              Src={AddIcon}
              Display="flex"
            ></Button>
          </Link>
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
