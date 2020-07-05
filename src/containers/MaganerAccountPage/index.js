import React, { Component, useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import axios from "axios";

export default function MaganeAccount() {
  const temp = [
    {
      account_id: 17,
      balance: null,
      card_number: "825962638187",
      closed_date: null,
      created_date: "2020-07-05",
      currency_unit: "VND",
      id: 10,
      status: "pending",
      term_deposit_id: null,
      type: 1,
    },
  ];
  const [data, setData] = useState(temp);

  data.forEach((item) => {
    console.log("item: ", item);
    if (item.type === "1") {
      item.type = "Silver";
    } else if (item.type === "2") {
      item.type = "Gold";
    } else {
      item.type = "Platinum";
    }
  });

  useEffect(async () => {
    const result = await axios.post(
      "http://localhost:1337/spend-accounts/findByAccount",
      {
        account_id: JSON.parse(localStorage.getItem("userAccount")).id,
      }
    );
    console.log("result: ", result);
    setData(result.data);
  }, []);
  const RenderCard = () => {
    return data.map((items) => (
      <Card
        key={items.key}
        Number={items.card_number}
        Type={items.type}
        Status={items.status}
        Created={items.created_date}
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
