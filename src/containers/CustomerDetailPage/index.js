/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import PersonalPage from "./styled";
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
import Withdraw from "../WithDraw-admin";
import Card from "../../components/Card";
import DetailCard from "../AccountDetailPage";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { config } from "../../configs/server";
export default function Profile(props) {
  let history = useHistory();
  const alert = useAlert();
  const accountInfo = props.data;

  const [dataCard, setDataCard] = useState([]);

  const [state, setState] = useState("detail");
  const [CardID, SetCardID] = useState("");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/spend-accounts-by-owneraccount?id=${accountInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDataCard(result.data);
    }
    Fecth();
  }, []);
  const HandlerBlock = async () => {
    const block = await axios.put(
      `${config.server}/users/${accountInfo.id}`,
      {
        status: "block",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert.success("Action success");
    setTimeout(function () {
      history.go(0);
    }, 1500);
  };
  const HandlerUnblock = async () => {
    const block = await axios.put(
      `${config.server}/users/${accountInfo.id}`,
      {
        status: "active",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert.success("Action success");
    setTimeout(function () {
      history.go(0);
    }, 1500);
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
        unit={items.currency_unit}
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
        <p style={{ marginTop: "40px " }} className="title">
          {" "}
          Account
        </p>
        <div className="containerListCard">
          <RenderListCard></RenderListCard>
        </div>
      </ListCardStyled>
    );
  }
  function RenderBlockAtive() {
    if (accountInfo.status === "active") {
      return (
        <Button
          key="1"
          Top="0px"
          title="Lock"
          Width="187px"
          onClick={HandlerBlock}
          BackgroundColor="#F45C59"
          Display="none"
        ></Button>
      );
    } else {
      return (
        <Button
          key="1"
          Top="0px"
          title="Unlock"
          Width="187px"
          onClick={HandlerUnblock}
          BackgroundColor="#56CD67"
          Display="none"
        ></Button>
      );
    }
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
                title="Withdraw"
                Width="187px"
                onClick={() => {
                  setState("withdraw");
                }}
                // Src={AddIcon}
                BackgroundColor="#4F6EF6"
                Display="none"
              ></Button>
              {RenderBlockAtive()}
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
        backTitle="Profile"
        accountInfo={accountInfo}
        onClick={() => {
          setState("detail");
        }}
      ></Deposit>
    );
  } else if (state === "withdraw") {
    return (
      <Withdraw
        backTitle="Profile"
        accountInfo={accountInfo}
        onClick={() => {
          setState("detail");
        }}
      ></Withdraw>
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
