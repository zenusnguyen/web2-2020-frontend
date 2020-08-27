import React, { useState } from "react";
import SignInPageStyle from "./styled";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import "react-datepicker/dist/react-datepicker.css";
import InputForm from "../../components/InputForm";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import TextArea from "../../components/TextArea";
import { useAlert } from "react-alert";
import * as _ from "lodash";
import { config } from "../../configs/server";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
export default function Register() {
  const alert = useAlert();
  let history = useHistory();
  let token = localStorage.getItem("token");

  if (token) {
    history.push("profile");
  }

  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [DateOfIssue, setDateOfIssue] = useState(new Date());
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [passport, setPassport] = useState(null);
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [img1, setImgUrl1] = useState(null);
  const [img2, setImgUrl2] = useState(null);
  const [otp, setOtp] = useState("");
  const [otp2, setOtp2] = useState("");
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

  function convertBase64(file) {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        // reader.result;

        setPic1(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function convertBase642(file) {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setPic2(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const handleChangePic = (e, pic) => {
    // e.preventDefault();

    if (e.target.files[0].size >= 0.5 * 1024 * 1024) {
      alert.error("Max size of an image: 0.5 MB");
    } else {
      if (pic === "pic1") {
        convertBase64(e.target.files[0]);
        setImgUrl1(URL.createObjectURL(e.target.files[0]));
      } else if (pic === "pic2") {
        convertBase642(e.target.files[0]);
        setImgUrl2(URL.createObjectURL(e.target.files[0]));
      }
    }
  };
  const Button = styled.button`
    width: 100px;
    height: 100px;

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
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async function HandlerInput() {
    const checkCMND = await axios.get(
      `${config.server}/customer-infors-find-cmnd?identificationNumber=${passport}`
    );
    if (checkCMND.data.length !== 0) {
      alert.error("identification number has been registed");
      return false;
    } else if (
      !validateEmail(email) ||
      userName === null ||
      password === null ||
      confirmPassword === null ||
      password !== confirmPassword ||
      fullName === null ||
      phoneNumber === null ||
      address === null ||
      passport === null ||
      img1 === null ||
      img2 === null ||
      otp != otp2
    ) {
      alert.error("check your input");
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    const handle = await HandlerInput();
    if (handle === true) {
      const createUserInfor = await axios
        .post(`${config.server}/customer-infors`, {
          full_name: fullName,
          phone_number: phoneNumber,
          address: address,
          date_of_birth: DateOfBirth,
          date_of_issue: DateOfIssue,
          identificationNumber: passport,
          img1: pic1,
          img2: pic2,
        })
        .then()
        .catch((err) => alert.error("some things went wrong"));
      const createAccount = await axios
        .post(`${config.server}/auth/local/register`, {
          status: "pending",
          username: userName,
          email: email,
          password: password,
          user_info: createUserInfor.data.id,
        })
        .then()
        .catch((err) => {
          alert.error("some things went wrong");
        });

      if (_.get(createAccount, "data.jwt")) {
        const createCard = await axios.post(`${config.server}/spend-accounts`, {
          balance: 0,
          card_type: "spend",
          currency_unit: "VND",
          spend_type: "1",
          card_number: Math.floor(
            100000000000 + Math.random() * 900000000000
          ).toString(),
          account_id: createAccount.data.user.id,
          status: "active",
          created_date: new Date(),
        });
        alert.success("Register Success");
        await sleep(1000);
        history.push("/signin");
      } else {
        alert.error("Check your input");
      }
    }
  }
  async function getOTP() {
    if (!validateEmail(email)) {
      alert.error("Please check your email !");
    } else {
      const result = await axios.post(`${config.server}/getotp-verify`, {
        email: email,
      });

      if (result.status == 200) {
        alert.success("please check your mail to get OTP code");
        setOtp2(result.data);
      } else {
        alert.error("Action error please check again!");
      }
    }
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header></Header>
      <SignInPageStyle>
        <div className="Register">
          <p className="SignInTitle">Create Account</p>
          <InputForm
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            title="Email "
          ></InputForm>
          <InputForm
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            title="Username "
          ></InputForm>
          <InputForm
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            title="Password "
          ></InputForm>
          <InputForm
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            title="Confirm password "
          ></InputForm>
          <InputForm
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            title="Fullname "
          ></InputForm>
          <div className="dualColumn">
            <InputForm
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              title=" Phone number  "
              Width="160px"
            ></InputForm>

            <MyDatePickerStyle>
              <div>
                <p>Date of birth</p>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={DateOfBirth}
                  onChange={(e) => setDateOfBirth(e)}
                ></DatePicker>
              </div>
              {/* <img src={Calendar}></img> */}
            </MyDatePickerStyle>
          </div>

          <TextArea
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            title="Current address"
          ></TextArea>

          <div className="dualColumn">
            <InputForm
              onChange={(e) => setPassport(e.target.value)}
              type="number"
              title=" ID/ Passport number"
              Width="160px"
            ></InputForm>
            <MyDatePickerStyle>
              <div>
                <p>Date of issue</p>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={DateOfIssue || new Date()}
                  onChange={(e) => setDateOfIssue(e)}
                ></DatePicker>
              </div>
              {/* <img src={Calendar}></img> */}
            </MyDatePickerStyle>
          </div>

          <div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Upload photo
            </p>
            <div className="uploadImage">
              <div style={{ marginRight: "10px" }}>
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
                <p
                  style={{
                    textAlign: "center",
                    margin: "8px 0 0 0",
                    color: "#828485",
                  }}
                >
                  Front
                </p>
              </div>
              <div style={{ marginLeft: "10px" }}>
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
                <p
                  style={{
                    textAlign: "center",
                    margin: "8px 0 0 0",
                    color: "#828485",
                  }}
                >
                  Back
                </p>
              </div>
            </div>
          </div>
          <div className="verify">
            <InputForm
              onChange={(e) => setOtp(e.target.value)}
              defaultValue={0}
              type="number"
              title="Verification code"
              name={"Verification code"}
              Width="200px"
              Bottom="8px"
            ></InputForm>
            <button onClick={getOTP}> Get Code</button>
          </div>
          <button onClick={handleSubmit} className="registerButton">
            Request
          </button>
          <div className="create">
            <p>Already have an account? </p>
            <p className="createHere">
              <Link to="/signin"> Sign in here</Link>
            </p>
          </div>
        </div>
      </SignInPageStyle>
    </div>
  );
}
