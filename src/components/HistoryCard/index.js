import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/wallet.svg";
// {
//   TypeCard,
//   Onclick,
//   Status,
//   TransferType,
//   Date,
//   Amount,
//   RemainingBalance,
// }
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
      <div className="icon">
        <img src={Icon}></img>
      </div>
      <div className="detail-left">
        <p>{props.TransferType} </p>
        <p className="subtext"> {props.Date} </p>
      </div>
      <div className="detail-right">
        <p style={{ color: Style }}> {props.Amount} </p>
        <p className="subtext"> {props.RemainingBalance} </p>
      </div>
    </CardStyled>
  );
}
