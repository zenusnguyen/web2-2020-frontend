import React, { Component, useEffect, useState } from "react";
import Register from "./styled";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";
import axios from "axios";
import * as _ from "lodash";
export default function Profile() {
  const user = [];

  // const loadUserProfile = async () => {
    // const userId = localStorage.getItem("userId");

  // const userTemp = await axios.get(
  //   `http://localhost:1337/customer-infors/?id=${userId}`
  // );

  // user.push(userTemp.data[0]);
  // };

  useEffect(() => {
    async function loadUserProfile() {
      const userId = localStorage.getItem("userId");
      const userTemp = await axios.get(
        `http://localhost:1337/customer-infors/?id=${userId}`
      );

      user.push(userTemp.data[0]);
    }
    loadUserProfile();
  });

  console.log("user", user);
  return (
    <Register>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <p className="SignInTitle">Edit Profile</p>
        <InputForm
          value={localStorage.getItem("email")}
          type="email"
          title="Email "
        ></InputForm>
        <InputForm
          type="text"
          value={localStorage.getItem("username")}
          title="User Name "
        ></InputForm>
        <InputForm type="password" title="Password "></InputForm>
        <InputForm type="password" title="Confirm Password "></InputForm>
        <InputForm
          value={_.get(user[0], "full_name")}
          type="text"
          title="Full Name "
        ></InputForm>
        <div className="dualColumn">
          <InputForm
            type="number"
            title=" Phone number  "
            Width="160px"
          ></InputForm>
          <DatePicker title="Date of birth"></DatePicker>
        </div>
        <TextArea type="text" title="Current address "></TextArea>
        <div className="dualColumn" style={{ marginTop: "20px" }}>
          <InputForm
            type="number"
            title=" ID/ Passport number  "
            Width="160px"
          ></InputForm>
          <DatePicker title="Date of birth"></DatePicker>
        </div>
        <PhotoUpload></PhotoUpload>
        <Button Top="36px" title="Update"></Button>
      </div>
    </Register>
  );
}
