import React, { useState } from "react";
import SignInPageStyle from "./styled";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import "react-datepicker/dist/react-datepicker.css";
import InputForm from "../../components/InputForm";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Register() {
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
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleSubmit() {
    let data = new FormData();
    data.append("files", pic1);
    data.append("files", pic2);

    const uploadRes = await axios({
      method: "POST",
      url: "http://localhost:1337/upload",
      data,
    });

    const createUserInfor = await axios.post(
      "http://localhost:1337/customer-infors",
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

    const createAccount = await axios.post(
      "http://localhost:1337/auth/local/register",
      {
        username: userName,
        email: email,
        password: password,
        user_info: createUserInfor.data.id,
      }
    );
    if (createAccount.data.jwt) {
      alert("Register Success");
      await sleep(1000);
      history.push("/");
    } else {
      alert("Check your input");
    }
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header></Header>
      <SignInPageStyle>
        {/* <RegisterForm></RegisterForm> */}
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
            title="User Name "
          ></InputForm>
          <InputForm
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            title="Password "
          ></InputForm>
          <InputForm
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            title="Confirm Password "
          ></InputForm>
          <InputForm
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            title="Full Name "
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
                  selected={DateOfBirth}
                  onChange={(e) => setDateOfBirth(e)}
                ></DatePicker>
              </div>
              <img src={Calendar}></img>
            </MyDatePickerStyle>
          </div>

          <div className="address">
            <p>Current address</p>
            <textarea onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
          <div className="dualColumn">
            <InputForm
              onChange={(e) => setPassport(e.target.value)}
              type="number"
              title=" ID/ Passport number  "
              Width="160px"
            ></InputForm>
            <MyDatePickerStyle>
              <div>
                <p>Date of Issue</p>
                <DatePicker
                  selected={DateOfIssue || new Date()}
                  onChange={(e) => setDateOfIssue(e)}
                ></DatePicker>
              </div>
              <img src={Calendar}></img>
            </MyDatePickerStyle>
          </div>
          {/* <PhotoUpload></PhotoUpload> */}
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
          <div className="create">
            <p>Already have an account? </p>
            <p className="createHere">
              <Link to="/"> Sign in here</Link>
            </p>
          </div>
        </div>
      </SignInPageStyle>
    </div>
  );
}
