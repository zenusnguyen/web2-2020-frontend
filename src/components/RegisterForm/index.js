import React, { Component, useState, useEffect } from "react";
import Register from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
import DatePicker from "react-datepicker";
import TextArea from "../TextArea";
import PhotoUpload from "../PhotoUpload";
import MyDatePickerStyle from "../DatePicker/styled";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import Calendar from "../../assets/calendar.png";
import axios from "axios";
export default function RegisterForm() {
  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [DateOfIssue, setDateOfIssue] = useState(new Date());
  const onChangeEmail = (e) => {
    console.log("e: ", e.target.value);
  };
  const onChangeDateOfBirth = (e) => {
    console.log("e: ", e);
  };
  // pic

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
    if (e.target.files[0].size >= 4 * 1024 * 1024) {
      alert("Max size of an image: 4MB");
    } else {
      if (pic === "pic1") {
        setPic1(e.target.files[0]);
        console.log("e.target.files[0]: ", e.target.files[0]);
        setImgUrl1(URL.createObjectURL(e.target.files[0]));
      } else if (pic === "pic2") {
        setPic2(e.target.files[0]);
        setImgUrl2(URL.createObjectURL(e.target.files[0]));
      } else {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("files", pic1);
    data.append("files", pic2);
    
    const uploadRes = await axios({
      method: "POST",
      url: "http://localhost:1337/upload",
      data,
    });
    console.log("uploadRes: ", uploadRes.data);
  };
  return (
    <Register>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p className="SignInTitle">Create Account</p>
        <InputForm
          onChange={(e) => onChangeEmail(e)}
          type="email"
          title="Email "
        ></InputForm>
        <InputForm type="text" title="User Name "></InputForm>
        <InputForm type="password" title="Password "></InputForm>
        <InputForm type="password" title="Confirm Password "></InputForm>
        <InputForm type="text" title="Full Name "></InputForm>
        <div className="dualColumn">
          <InputForm
            type="number"
            title=" Phone number  "
            Width="160px"
          ></InputForm>
          {/* <DatePicker title="Date of birth"></DatePicker> */}

          <MyDatePickerStyle>
            <div>
              <p></p>
              <DatePicker
                selected={DateOfBirth}
                onChange={(e) => setDateOfBirth(e)}
              ></DatePicker>
            </div>
            <img src={Calendar}></img>
          </MyDatePickerStyle>
        </div>
        <TextArea type="text" title="Current address "></TextArea>
        <div className="dualColumn" style={{ marginTop: "20px" }}>
          <InputForm
            type="number"
            title=" ID/ Passport number  "
            Width="160px"
          ></InputForm>
          <MyDatePickerStyle>
            <div>
              <p></p>
              <DatePicker
                selected={DateOfIssue}
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
              <Button onClick={handleClick1}>
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
              <Button onClick={handleClick2}>
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

        <button className="registerButton"> Request </button>
        <div className="create">
          <p>Don’t have an account? </p>
          <p className="createHere">Create here</p>
        </div>
      </form>
    </Register>
  );
}
