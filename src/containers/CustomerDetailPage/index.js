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
import axios from "axios";
export default function Profile(props) {
  const accountInfo = props.data;

  const [state, setState] = useState("detail");
  const _onClick = (state) => {
    setState(state);
  };
  function EditProfile(props) {
    console.log("props: ", props);
    const accountInfo = props.data;

    const [DateOfBirth, setDateOfBirth] = useState(new Date());
    const [img1, setimg1] = useState("");
    const [img2, setimg2] = useState("");
    const [DateOfIssue, setDateOfIssue] = useState(new Date());
    const [userInfo, setUserInfo] = useState("");
    console.log("userInfo: ", userInfo);

    useEffect(() => {
      async function Fecth() {
        const result = await axios.get(
          `http://localhost:1337/customer-infors/?id=${props.data.user_info}`
        );
        setUserInfo(result.data[0]);
        setDateOfBirth(new Date(result.data[0].date_of_birth));
        setDateOfIssue(new Date(result.data[0].date_of_issue));
        setimg2(result.data[0].img2);
        setimg1(result.data[0].img1);
      }
      Fecth();
    }, []);

    return (
      <Register>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <div
            onClick={() => {
              setState("detail");
            }}
            className="back"
          >
            <img src={Back}></img>
            {props.backTitle || "All customers"}
          </div>
          <p className="SignInTitle">Edit Profile</p>
          <InputForm
            value={accountInfo.email}
            type="email"
            title="Email "
          ></InputForm>
          <InputForm
            type="text"
            value={accountInfo.username}
            title="User Name "
          ></InputForm>

          <InputForm
            placeholder={userInfo.full_name}
            type="text"
            title="Full Name "
          ></InputForm>
          <div className="dualColumn">
            <InputForm
              placeholder={userInfo.phone_number}
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
            value={userInfo.address}
            type="text"
            title="Current address "
          ></TextArea>
          <div className="dualColumn" style={{ marginTop: "20px" }}>
            <InputForm
              placeholder={userInfo.identificationNumber}
              pattern="[0-9]"
              type="tel"
              title=" ID/ Passport number  "
              Width="160px"
            ></InputForm>

            <MyDatePickerStyle>
              <div>
                <p>Date of birth</p>
                <DatePicker
                  selected={DateOfIssue}
                  onChange={(e) => setDateOfIssue(e)}
                ></DatePicker>
              </div>
              <img src={Calendar}></img>
            </MyDatePickerStyle>
          </div>
          <PhotoUpload value1={img1} value2={img2}></PhotoUpload>
          {/* <img src={img1}></img> */}
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
        </div>
      </PersonalPage>
    );
  else if (state === "edit") {
    return <EditProfile data={accountInfo}></EditProfile>;
  } else if (state === "deposit") {
    return <Deposit></Deposit>;
  }
}
