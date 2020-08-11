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
import { useAlert } from "react-alert";
import axios from "axios";
import * as _ from "lodash";
import { useHistory } from "react-router-dom";
export default function Profile(props) {
  let history = useHistory();
  const alert = useAlert();
  const UserAccount = props.data;
  const HandlerAccept = async () => {
    const active = await axios
      .put(`http://localhost:1337/users/${UserAccount.id}`, {
        status: "active",
      })
      .then((data) => {
        console.log(data);
        alert.success("Action success");

        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        alert.error("Action Error");
      });
  };
  const HandlerReject = async () => {
    const reject = await axios
      .put(`http://localhost:1337/users/${UserAccount.id}`, {
        status: "reject",
      })
      .then((data) => {
        console.log(data);
        alert.success("Action success");

        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };
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
              title="Accept"
              Width="187px"
              BackgroundColor="#4F6EF6"
              Display="none"
              onClick={HandlerAccept}
            ></Button>
            <Button
              onClick={HandlerReject}
              key="2"
              Top="0px"
              title="Reject"
              Width="187px"
              BackgroundColor="#BDBEBF"
              Display="none"
            ></Button>
          </div>
        </div>
        <p className="title">Personal information</p>
        <PersonalDetailCard accountInfo={UserAccount}></PersonalDetailCard>
      </div>
    </PersonalPage>
  );
}
