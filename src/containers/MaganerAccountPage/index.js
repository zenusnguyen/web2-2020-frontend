import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import axios from "axios";

export default function MaganeAccount() {
  const temp = [];
  const [data, setData] = useState(temp);

  data.forEach((item) => {
    if (item.type === "1") {
      item.type = "Silver";
    } else if (item.type === "2") {
      item.type = "Gold";
    } else {
      item.type = "Platinum";
    }
  });

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

  const RenderCard = () => {
    return data.map((items) => (
      <Card
        // Onclick={HandlerClick}
        key={items.key}
        Number={items.card_number}
        Type={items.type}
        Status={items.status}
        Created={items.created_date}
        TypeCard={items.term_deposit_id}
      ></Card>
    ));
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
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
    </MaganerAccountStyled>
  );
}
