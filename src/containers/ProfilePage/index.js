/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PersonalPage from "./styled";
import SideMenu from "../../components/SideMenu";
import PersonalDetailCard from "../../components/PersonalDetailCard";
import * as _ from "lodash";

export default function Profile(props) {
  const UserAccount = JSON.parse(localStorage.getItem("userAccount"));
  const UserInfo = JSON.parse(localStorage.getItem("userInfo"));

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
        </div>
        <p className="title">Personal information</p>
        <PersonalDetailCard
          accountInfo={UserAccount}
          UserInfo={UserInfo}
        ></PersonalDetailCard>
      </div>
    </PersonalPage>
  );
}
