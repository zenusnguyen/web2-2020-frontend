import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/wallet.svg";
export default function HistoryCard({
  TypeCard,
  Onclick,
  Status,
  TransferType,
  Date,
  Amount,
  RemainingBalance,
}) {
  let Style, Style2 = "";
  if (Amount < 0) {
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
        <p>{TransferType} </p>
        <p className="subtext"> {Date} </p>
      </div>
      <div className="detail-right">
        <p style={{ color: Style }}> {Amount} </p>
        <p className="subtext"> {RemainingBalance} </p>
      </div>
    </CardStyled>
  );
}
