/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PersonalPage from "./styled";

import SideMenu from "../../components/SideMenu";
import Button from "../../components/Button";
import PersonalDetailCard from "../../components/PersonalDetailCard";

import { config } from "../../configs/server";
import axios from "axios";
import * as _ from "lodash";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
export default function Profile(props) {
  let history = useHistory();
  const alert = useAlert();
  const UserAccount = props.data;
  const HandlerAccept = async () => {
    const active = await axios
      .put(
        `${config.server}/users/${UserAccount.id}`,
        {
          status: "active",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        alert.success("Action success");

        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => {
        alert.error("Action error please check again!");
      });
  };
  const HandlerReject = async () => {
    const reject = await axios
      .put(
        `${config.server}/users/${UserAccount.id}`,
        {
          status: "reject",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        alert.success("Action success");

        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => {});
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
