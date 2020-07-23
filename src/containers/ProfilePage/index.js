import React, { Component, useEffect, useState } from "react";
import PersonalPage from "./styled";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";
import Button from "../../components/Button";
import PersonalDetailCard from "../../components/PersonalDetailCard";
import * as _ from "lodash";
export default function Profile() {
  const UserAccount = JSON.parse(localStorage.getItem("userAccount"));
  const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <PersonalPage>
      <SideMenu></SideMenu>
      <div className="bodyContainer">
        <p className="pageTitle">My profile</p>
        <p className="title">Personal information</p>
        <PersonalDetailCard
          UserAccount={UserAccount}
          UserInfo={UserInfo}
        ></PersonalDetailCard>
        <p className="title">Change password</p>
        <InputForm title="New password" type="password"></InputForm>
        <InputForm title=" Confirm new password" type="password"></InputForm>
        <Button
          Top="36px"
          Width="187px"
          BackgroundColor="#4F6EF6"
          title="Save"
        ></Button>
      </div>
    </PersonalPage>
  );
}
