import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/wallet.svg";
import * as moment from "moment";
function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function HistoryCard(props) {
  let { Amount, Date, transferType, unit } = props;
  let Style;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.unit,
  });

  if (props.TransferType === "deposit") {
    Amount = `+ ${formatter.format(props.Amount.toString())}`;
    Style = "#56CD67";
  } else {
    Amount = `- ${formatter.format(props.Amount.toString())}`;
    Style = "#F45C59";
  }

  return (
    <CardStyled>
      <div className="icon">
        <img src={Icon}></img>
      </div>
      <div className="detail-left">
        <p>{jsUcfirst(props.TransferType) + " # " + props.id} </p>
        <p className="subtext"> {moment(props.Date).format("MMMM d, YYYY")} </p>
        <p className="subtext"> {"Remark : " + props.remark} </p>
      </div>
      <div className="detail-right">
        <p style={{ color: Style }}> {Amount} </p>
        <p className="subtext"> {formatter.format(props.RemainingBalance)} </p>
        <p className="subtext"> {"From : " + props.account} </p>
      </div>
    </CardStyled>
  );
}
