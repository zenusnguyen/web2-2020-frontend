import React, { Component, useEffect, useState } from "react";
import Register from "./styled";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";

import * as _ from "lodash";
export default function AccountDetail() {
  const UserAccount = JSON.parse(localStorage.getItem("userAccount"));
  const UserInfor = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <Register>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <p className="SignInTitle">Account Detail</p>
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
        {/* <InputForm type="password" title="Password "></InputForm>
        <InputForm type="password" title="Confirm Password "></InputForm> */}
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
          {/* <DatePicker title="Date of birth"></DatePicker> */}
          <InputForm
            value={UserInfor.date_of_birth}
            type="text"
            title=" Data of issue  "
            Width="160px"
          ></InputForm>
        </div>
        <TextArea
          value={UserInfor.address}
          type="text"
          title="Current address "
        ></TextArea>
      </div>
    </Register>
  );
}
