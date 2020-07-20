import React, { Component, useEffect, useState } from "react";
import Register from "./styled";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";

import * as _ from "lodash";
export default function Profile() {
  const User = JSON.parse(localStorage.getItem("userAccount"));
  return (
    <Register>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <p className="SignInTitle">Edit Profile</p>
        <InputForm
          value={JSON.parse(localStorage.getItem("userAccount")).email}
          type="email"
          title="Email "
        ></InputForm>
        <InputForm
          type="text"
          value={JSON.parse(localStorage.getItem("userAccount")).username}
          title="User Name "
        ></InputForm>
        {/* <InputForm type="password" title="Password "></InputForm>
        <InputForm type="password" title="Confirm Password "></InputForm> */}
        <InputForm
          value={JSON.parse(localStorage.getItem("userInfo")).full_name}
          type="text"
          title="Full Name "
        ></InputForm>
        <div className="dualColumn">
          <InputForm
            value={JSON.parse(localStorage.getItem("userInfo")).phone_number}
            type="number"
            title=" Phone number  "
            Width="160px"
          ></InputForm>
          {/* <DatePicker title="Date of birth"></DatePicker> */}
          <InputForm
            value={JSON.parse(localStorage.getItem("userInfo")).date_of_birth}
            type="text"
            title=" Data of issue  "
            Width="160px"
          ></InputForm>
        </div>
        <TextArea
          value={JSON.parse(localStorage.getItem("userInfo")).address}
          type="text"
          title="Current address "
        ></TextArea>
        <div className="dualColumn" style={{ marginTop: "20px" }}>
          <InputForm
            value={
              JSON.parse(localStorage.getItem("userInfo")).identificationNumber
            }
            pattern="[0-9]"
            type="tel"
            title=" ID/ Passport number  "
            Width="160px"
          ></InputForm>
          {/* <DatePicker value= {JSON.parse(localStorage.getItem("userInfo")).date_of_birth} title="Date of birth"></DatePicker> */}

          <InputForm
            value={JSON.parse(localStorage.getItem("userInfo")).date_of_issue}
            type="text"
            title=" Data of issue  "
            Width="160px"
          ></InputForm>
        </div>
        <PhotoUpload
          value1={JSON.parse(localStorage.getItem("userInfo")).img1}
          value2={JSON.parse(localStorage.getItem("userInfo")).img2}
        ></PhotoUpload>
        {/* <Button Top="36px" title="Update"></Button> */}
      </div>
    </Register>
  );
}
