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
import * as _ from "lodash";
import { DepositStyled } from "./styled";
import Select from "react-select";
function Deposit(props) {
  const techCompanies = [
    { label: "Bank 1", value: 1 },
    { label: "Bank 2", value: 2 },
    { label: "Bank 3", value: 3 },
    { label: "Bank 4", value: 4 },
    { label: "Bank 5", value: 5 },
    { label: "Bank 6", value: 6 },
  ];
  const spendAccounts = [
    { label: "123456 - Nguyen Van A", value: 1 },
    { label: "123452 - Nguyen Van B", value: 2 },
    { label: "123453 - Nguyen Van C", value: 3 },
  ];
  return (
    <DepositStyled>
      <SideMenu></SideMenu>
      <div>
        <div onClick={props.onClick} className="back">
          <img src={Back}></img>
          {props.backTitle || "Nguyễn Việt Anh"}
        </div>
        <div className="titleWithButton">
          <p className="pageTitle">{props.userName || "Deposit"}</p>
        </div>
        <div className="extraBanking">
          <p>Select an account</p>
          <Select style={{ height: "100%" }} options={techCompanies} />
        </div>
        <InputForm
          defaultValue={0}
          value={"20,000,000"}
          type="text"
          title="Amount"
          name={"balance"}
          readonly={"readonly"}
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

export default function Profile(props) {
  const UserAccount = JSON.parse(localStorage.getItem("userAccount"));
  const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
  let test = false;
  if (test === true)
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
                // Src={AddIcon}
                BackgroundColor="#4F6EF6"
                Display="none"
              ></Button>
              <Button
                key="1"
                Top="0px"
                title="Deposit"
                Width="187px"
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
          <PersonalDetailCard
            UserAccount={UserAccount}
            UserInfo={UserInfo}
          ></PersonalDetailCard>
        </div>
      </PersonalPage>
    );
  else {
    return <Deposit></Deposit>;
  }
}
