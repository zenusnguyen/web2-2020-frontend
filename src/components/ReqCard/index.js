import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/person.png";
import Button from "../Button";

function ShowDetail(HandlerClick) {}

export default function HistoryCard(props) {
  let Style,
    Style2 = "";
  if (props.Amount < 0) {
    Style = "#F45C59";
  } else {
    Style = "#56CD67";
  }

  return (
    <CardStyled>
      <div className="left">
        <div className="icon">
          <img src={Icon}></img>
        </div>
        <div className="detail-left">
          <p>{`${props.UserName} (${props.email})` || ""} </p>
          <p className="subtext"> {props.Date || new Date().toISOString()} </p>
        </div>
      </div>
      <div className="detail-right">
        <Button
          onClick={props.onClick}
          Color="white"
          title="Details"
          BorderRadius="8px"
          Top="0px"
          Width="140px"
          Height="40px"
          BackgroundColor="#4F6EF6"
        ></Button>
      </div>
    </CardStyled>
  );
}
