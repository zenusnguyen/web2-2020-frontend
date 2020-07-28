import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import axios from "axios";
import RequsetDetailPage from "../RequsetDetailPage";
import PendingRequestCard from "../../components/ReqCard";

function ShowDetail(HandlerClick) {
  return (
    <RequsetDetailPage
      userName="Nguyen Viet Anh"
      onClick={HandlerClick}
      backImg="../../assets/back.svg"
      backTitle="Pending Request"
    ></RequsetDetailPage>
  );
}

export default function MaganeAccount() {
  const [data, setData] = useState([]);

  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        "http://localhost:1337/users-permissions/users-unactive?status=pending"
      );
      setData(result.data);
    }
    Fecth();
  }, []);

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
    return data.map((items) => (
      <PendingRequestCard
        UserName={items.username}
        email={items.email}
        Date={items.created_at}
        onClick={() => {
          HandlerClick((items = items.card_number));
        }}
      ></PendingRequestCard>
    ));
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm" style={{ display: styled }}>
        <p className="SignInTitle"> Pending requests</p>

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
