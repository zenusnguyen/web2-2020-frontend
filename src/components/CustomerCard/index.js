import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/person.png";
import Button from "../Button";

export default function HistoryCard(props) {
  let Style,
    Style2 = "";
  if (props.Amount < 0) {
    Style = "#F45C59";
  } else {
    Style = "#56CD67";
  }
  if (props.username !== "admin") {
    return (
      <CardStyled>
        <div className="icon">
          <img src={Icon}></img>
        </div>
        <div className="detail-left">
          <div className="withStatus">
            <p>{props.username || " "} </p>
            <div className="status">
              <p>{props.Status || "Active"}</p>
            </div>
          </div>
          <p className="subtext"> {props.email || "zenusnguyen@gmail.com"} </p>
        </div>
        <div className="detail-right">
          <Button
            onClick={props.onClick}
            Color="white"
            title="Details"
            BorderRadius="8px"
            Top="0px"
            Width="140px"
            BackgroundColor="#4F6EF6"
          ></Button>
        </div>
      </CardStyled>
    );
  } else {
    return <div></div>;
  }
}
