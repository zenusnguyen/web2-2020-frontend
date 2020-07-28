/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useEffect, useState } from "react";
import PersonalPage from "./styled";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";
import Button from "../../components/Button";
import PersonalDetailCard from "../../components/PersonalDetailCard";
import Back from "../../assets/back.svg";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";
import * as _ from "lodash";
import { DepositStyled, ListCardStyled } from "./styled";
import Select from "react-select";
import axios from "axios";
import EditProfile from "../editProfile-admin";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import Card from "../../components/Card";
export default function Profile(props) {
  const accountInfo = props.data;

  const [dataCard, setDataCard] = useState([]);

  const [state, setState] = useState("detail");
  const _onClick = (state) => {
    setState(state);
  };
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${accountInfo.id}`
      );
      setDataCard(result.data);
    }
    Fecth();
  }, []);
  console.log("dataCard: ", dataCard);
  function RenderListCard() {
    return dataCard.map((items, index) => (
      <Card
        key={index}
        Number={items.card_number}
        Balance={items.balance || 0}
        Status={items.status}
        Created={items.created_date}
        TypeCard={items.spend_type}
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

  function Deposit(props) {
    console.log("props: ", props);
    const [listSpend, setListSpend] = useState([]);
    const [spendAccounts, setSpendAccount] = useState([]);
    let spendAccountsArray = [];

    useEffect(() => {
      async function Fecth() {
        const result = await axios.get(
          `http://localhost:1337/spend-accounts-by-owneraccount?id=${props.accountInfo.id}`
        );
        setListSpend(result.data);
        _.forEach(result.data, (item) => {
          if (item.status === "active" && item.card_type === "spend") {
            spendAccountsArray.push({
              label: `${item.card_number}`,
              value: `${item.card_number}`,
            });
          }
        });
        setSpendAccount(spendAccountsArray);
      }
      Fecth();
    }, []);

    return (
      <DepositStyled>
        <SideMenu></SideMenu>
        <div className="containerDeposit">
          <div
            onClick={() => {
              setState("detail");
            }}
            className="back"
          >
            <img src={Back}></img>
            {props.backTitle || "Nguyễn Việt Anh"}
          </div>
          <div className="titleWithButton">
            <p className="pageTitle">{props.userName || "Deposit"}</p>
          </div>
          <div className="selectAccount">
            <p>Select an account</p>
            <Select
              style={{ height: "100%", fontSize: "16px", fontWeight: "500" }}
              options={spendAccounts}
            />
          </div>
          <InputForm
            // defaultValue={0}
            // value={"20,000,000"}
            type="number"
            title="Amount"
            name={"balance"}
            // readonly={"readonly"}
          ></InputForm>

          <TextArea
            value={"Tien HP"}
            type="text"
            title="Remark "
            name={"remark"}
          ></TextArea>
          <Button
            Top="55px"
            Width="190px"
            title="Deposit"
            BackgroundColor={"#4F6EF6"}
          ></Button>
        </div>
      </DepositStyled>
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
                // Src={AddIcon}
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
    return <Deposit accountInfo={accountInfo}></Deposit>;
  }
}
