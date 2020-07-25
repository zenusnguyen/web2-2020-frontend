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
import { DepositStyled, Register } from "./styled";
import Select from "react-select";

function EditProfile(props) {
  const UserAccount = JSON.parse(localStorage.getItem("userAccount"));
  const UserInfor = JSON.parse(localStorage.getItem("userInfo"));

  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [DateOfIssue, setDateOfIssue] = useState(new Date());
  return (
    <Register>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <p className="SignInTitle">Edit Profile</p>
        <InputForm
          value={UserAccount.email}
          type="email"
          title="Email "
        ></InputForm>
        <InputForm
          type="text"
          value={UserAccount.username}
          title="User Name "
        ></InputForm>

        <InputForm
          value={UserInfor.full_name}
          type="text"
          title="Full Name "
        ></InputForm>
        <div className="dualColumn">
          <InputForm
            value={UserInfor.phone_number}
            type="number"
            title=" Phone number  "
            Width="160px"
          ></InputForm>
          <MyDatePickerStyle>
            <div>
              <p>Date of birth</p>
              <DatePicker
                selected={DateOfBirth}
                onChange={(e) => setDateOfBirth(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
        </div>
        <TextArea
          value={UserInfor.address}
          type="text"
          title="Current address "
        ></TextArea>
        <div className="dualColumn" style={{ marginTop: "20px" }}>
          <InputForm
            value={UserInfor.identificationNumber}
            pattern="[0-9]"
            type="tel"
            title=" ID/ Passport number  "
            Width="160px"
          ></InputForm>

          <MyDatePickerStyle>
            <div>
              <p>Date of birth</p>
              <DatePicker
                selected={DateOfBirth}
                onChange={(e) => setDateOfBirth(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
        </div>
        <PhotoUpload
          value1={UserInfor.img1}
          value2={UserInfor.img2}
        ></PhotoUpload>
        <Button
          BackgroundColor="#4F6EF6"
          Width=" 187px"
          Top="36px"
          title="Save"
        ></Button>
      </div>
    </Register>
  );
}

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
      <div className="containerDeposit">
        <div onClick={props.onClick} className="back">
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
            options={techCompanies}
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
    return <EditProfile></EditProfile>;
  }
}
