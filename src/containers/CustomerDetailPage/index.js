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
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
export default function Profile(props) {
  const accountInfo = props.data;

  const [state, setState] = useState("detail");
  const _onClick = (state) => {
    setState(state);
  };

  function EditProfile(props) {
    const accountInfo = props.data;

    const [DateOfBirth, setDateOfBirth] = useState(new Date());
    const [img1, setImgUrl1] = useState(null);
    const [img2, setImgUrl2] = useState(null);
    const [DateOfIssue, setDateOfIssue] = useState(new Date());
    const [userInfo, setUserInfo] = useState("");
    const [pic1, setPic1] = useState(null);
    const [pic2, setPic2] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [passport, setPassport] = useState(null);

    useEffect(() => {
      async function Fecth() {
        const result = await axios.get(
          `http://localhost:1337/customer-infors/?id=${props.data.user_info}`
        );
        setUserInfo(result.data[0]);
        setDateOfBirth(new Date(result.data[0].date_of_birth));
        setDateOfIssue(new Date(result.data[0].date_of_issue));
        setImgUrl1(`http://localhost:1337${result.data[0].img1}`);
        setImgUrl2(`http://localhost:1337${result.data[0].img2}`);
      }

      Fecth();
    }, []);

    async function handleSubmit() {
      let data = new FormData();
      let uploadRes;
      if (pic1 && pic2) {
        data.append("files", pic1);
        data.append("files", pic2);

        uploadRes = await axios({
          method: "POST",
          url: "http://localhost:1337/upload",
          data,
        });

        const createUserInfor = await axios.put(
          `http://localhost:1337/customer-infors/${accountInfo.user_info}`,
          {
            full_name: fullName,
            phone_number: phoneNumber,
            address: address,
            date_of_birth: DateOfBirth,
            date_of_issue: DateOfIssue,
            identificationNumber: passport,
            img1: uploadRes.data[0].url,
            img2: uploadRes.data[1].url,
          }
        );
        console.log("createUserInfor: ", createUserInfor);
      } else if (!pic1 && !pic2) {
        const createUserInfor = await axios.put(
          `http://localhost:1337/customer-infors/${accountInfo.user_info}`,
          {
            full_name: fullName,
            phone_number: phoneNumber,
            address: address,
            date_of_birth: DateOfBirth,
            date_of_issue: DateOfIssue,
            identificationNumber: passport,
          }
        );
      } else {
        alert("vui long upload ca 2 hinh ");
      }
    }

    const getPreview = (img) =>
      img !== null
        ? {
            border: "0px",
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + img + ")",
            backgroundSize: "cover",
            border: "0px",
          }
        : {
            backgroundImage: "url(" + AddIcon + ")",
            backgroundSize: "cover",
            border: "0px",
          };

    const handleChangePic = (e, pic) => {
      // e.preventDefault();

      if (e.target.files[0].size >= 4 * 1024 * 1024) {
        alert("Max size of an image: 4MB");
      } else {
        if (pic === "pic1") {
          setPic1(e.target.files[0]);

          setImgUrl1(URL.createObjectURL(e.target.files[0]));
        } else if (pic === "pic2") {
          setPic2(e.target.files[0]);

          setImgUrl2(URL.createObjectURL(e.target.files[0]));
        }
      }
    };

    const Button = styled.button`
      /* Insert your favorite CSS code to style a button */

      width: 100px;
      height: 100px;
      /* background-color: white; */
      border-style: dashed;
    `;

    const handleClick1 = (event) => {
      document.getElementById("hiddenFileInput").click();
    };

    const handleClick2 = (event) => {
      document.getElementById("hiddenFileInput2").click();
    };
    const handleChange = (event) => {
      const fileUploaded = event.target.files[0];
    };

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
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder={userInfo.full_name}
            type="text"
            title="Full Name "
          ></InputForm>
          <div className="dualColumn">
            <InputForm
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
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
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={userInfo.address}
            type="text"
            title="Current address "
          ></TextArea>
          <div className="dualColumn" style={{ marginTop: "20px" }}>
            <InputForm
              onChange={(e) => {
                setPassport(e.target.value);
              }}
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
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Upload photo</p>
            <div className="uploadImage">
              <div>
                <Button style={{ padding: "0px" }} onClick={handleClick1}>
                  <img style={getPreview(img1)}></img>
                </Button>
                <input
                  type="file"
                  id="hiddenFileInput"
                  onChange={(e) => {
                    handleChangePic(e, "pic1");
                  }}
                  style={{ display: "none" }}
                />
                <p style={{ marginLeft: "50px", marginTop: "10px" }}>Front</p>
              </div>
              <div>
                <Button style={{ padding: "0px" }} onClick={handleClick2}>
                  <img style={getPreview(img2)}></img>
                </Button>
                <input
                  type="file"
                  id="hiddenFileInput2"
                  onChange={(e) => {
                    handleChangePic(e, "pic2");
                  }}
                  style={{ display: "none" }}
                />
                <p style={{ marginLeft: "50px", marginTop: "10px" }}>Back</p>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className="registerButton">
            Request
          </button>
        </div>
      </Register>
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
    console.log("listSpend: ", listSpend);
    // const techCompanies = [
    //   { label: "Bank 1", value: 1 },
    //   { label: "Bank 2", value: 2 },
    //   { label: "Bank 3", value: 3 },
    //   { label: "Bank 4", value: 4 },
    //   { label: "Bank 5", value: 5 },
    //   { label: "Bank 6", value: 6 },
    // ];
    // const spendAccounts = [
    //   { label: "123456 - Nguyen Van A", value: 1 },
    //   { label: "123452 - Nguyen Van B", value: 2 },
    //   { label: "123453 - Nguyen Van C", value: 3 },
    // ];
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
        </div>
      </PersonalPage>
    );
  else if (state === "edit") {
    return <EditProfile data={accountInfo}></EditProfile>;
  } else if (state === "deposit") {
    return <Deposit accountInfo={accountInfo}></Deposit>;
  }
}
