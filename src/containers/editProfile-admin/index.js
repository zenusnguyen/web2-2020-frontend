import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import DatePicker from "react-datepicker";
import MyDatePickerStyle from "../../components/DatePicker/styled";
import Calendar from "../../assets/calendar.png";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import { DepositStyled, Register } from "./styled";
import Back from "../../assets/back.svg";
import TextArea from "../../components/TextArea";
export default function EditProfile(props) {
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
          onClick={props.onClick}
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
