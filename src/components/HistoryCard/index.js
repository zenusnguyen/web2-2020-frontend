import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/wallet.svg";

export default function HistoryCard(props) {
  let { Amount, Date, transferType } = props;
  let Style,
    Style2 = "";
  if (props.TransferType === "deposit") {
    Amount = "-" + props.Amount.toString();
    Style = "#F45C59";
  } else {
    Amount = "+" + props.Amount.toString();
    Style = "#56CD67";
  }

  return (
    <CardStyled>
      <div className="icon">
        <img src={Icon}></img>
      </div>
      <div className="detail-left">
        <p>{props.TransferType} </p>
        <p className="subtext"> {props.Date} </p>
      </div>
      <div className="detail-right">
        <p style={{ color: Style }}> {Amount} </p>
        <p className="subtext"> {props.RemainingBalance} </p>
      </div>
    </CardStyled>
  );
}
