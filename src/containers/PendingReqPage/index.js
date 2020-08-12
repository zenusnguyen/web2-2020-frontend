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
import { config } from "../../configs/server";
export default function MaganeAccount() {
  const [data, setData] = useState([]);

  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  const [state, setState] = useState("all");
  const [request, setRequest] = useState([]);
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/users-permissions/users-unactive?status=pending`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  const HandlerClick = (items) => {
    setState("default");
    setRequest(items);
  };

  const RenderCard = () => {
    return data.map((items) => (
      <PendingRequestCard
        UserName={items.username}
        email={items.email}
        Date={items.created_at}
        onClick={() => {
          HandlerClick(items);
        }}
      ></PendingRequestCard>
    ));
  };

  if (state == "all")
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm" style={{ display: styled }}>
          <p className="SignInTitle"> Pending requests</p>
          <div className="listCard">
            <RenderCard></RenderCard>
          </div>
        </div>
      </MaganerAccountStyled>
    );
  else {
    return (
      <RequsetDetailPage
        data={request}
        onClick={() => {
          setState("all");
        }}
        backImg="../../assets/back.svg"
        backTitle="Pending Request"
      ></RequsetDetailPage>
    );
  }
}
