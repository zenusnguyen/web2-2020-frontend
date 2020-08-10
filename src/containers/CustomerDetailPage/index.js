/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useEffect, useState } from "react";
import PersonalPage from "./styled";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import SideMenu from "../../components/SideMenu";
import Button from "../../components/Button";
import PersonalDetailCard from "../../components/PersonalDetailCard";
import Back from "../../assets/back.svg";
import * as _ from "lodash";
import { DepositStyled, ListCardStyled } from "./styled";
import Select from "react-select";
import axios from "axios";
import EditProfile from "../editProfile-admin";
import Deposit from "../Deposit-admin";
import Card from "../../components/Card";
import DetailCard from "../AccountDetailPage";
export default function Profile(props) {
  const accountInfo = props.data;

  const [dataCard, setDataCard] = useState([]);

  const [state, setState] = useState("detail");
  const [CardID, SetCardID] = useState("");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${accountInfo.id}`
      );
      setDataCard(result.data);
    }
    Fecth();
  }, []);
  const HandlerBlock = async () => {
    const block = await axios.put(
      `http://localhost:1337/users/${accountInfo.id}`,
      {
        status: "block",
      }
    );
    console.log("block: ", block);
  };
  function ShowDetail(cardInfo) {
    SetCardID(cardInfo);
    setState("cardDetail");
  }

  function RenderListCard() {
    return dataCard.map((items, index) => (
      <Card
        onClick={() => {
          ShowDetail(items);
        }}
        key={index}
        Number={items.card_number}
        Balance={items.balance || 0}
        Status={items.status}
        Created={items.created_date}
        Card_type={items.card_type}
      ></Card>
    ));
  }
  function ListCard() {
    return (
      <ListCardStyled>
        <p className="title"> Account</p>
        <div className="containerListCard">
          <RenderListCard></RenderListCard>
        </div>
      </ListCardStyled>
    );
  }

  if (state === "detail")
    return (
      <PersonalPage>
        <SideMenu></SideMenu>
        <div className="bodyContainer">
          <div onClick={props.onClick} className="back">
            <img src={props.backImg}></img>
            {props.backTitle}
          </div>
          <div className="titleWithButton">
            <p className="pageTitle">{props.userName || "My profile"}</p>
            <div className="buttonGroup">
              <Button
                key="1"
                Top="0px"
                title="Edit info"
                Width="187px"
                onClick={() => {
                  setState("edit");
                }}
                BackgroundColor="#4F6EF6"
                Display="none"
              ></Button>
              <Button
                key="1"
                Top="0px"
                title="Deposit"
                Width="187px"
                onClick={() => {
                  setState("deposit");
                }}
                // Src={AddIcon}
                BackgroundColor="#4F6EF6"
                Display="none"
              ></Button>
              <Button
                key="1"
                Top="0px"
                title="Block"
                Width="187px"
                onClick={HandlerBlock}
                BackgroundColor="#BDBEBF"
                Display="none"
              ></Button>
            </div>
          </div>
          <p className="title">Personal information</p>
          <PersonalDetailCard accountInfo={accountInfo}></PersonalDetailCard>
          <ListCard></ListCard>
        </div>
      </PersonalPage>
    );
  else if (state === "edit") {
    return (
      <EditProfile
        data={accountInfo}
        onClick={() => {
          setState("detail");
        }}
      ></EditProfile>
    );
  } else if (state === "deposit") {
    return (
      <Deposit
        accountInfo={accountInfo}
        onClick={() => {
          setState("detail");
        }}
      ></Deposit>
    );
  } else if (state === "cardDetail") {
    return (
      <DetailCard
        cardInfo={CardID}
        onClick={() => {
          setState("detail");
        }}
      ></DetailCard>
    );
  }
}
