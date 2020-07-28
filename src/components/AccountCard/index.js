import React, { useState } from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend-gold.svg";
import SavingCard from "../../assets/savings.svg";

export default function AccountCard(props) {
  let Style,
    Style2 = "";
  if (props.Term === undefined) {
    Style2 = "";
    Style = "none";
  } else {
    Style2 = "none";
    Style = "";
  }
  let Src = "";
  if (props.TypeCard === null) {
    Src = SpendCard;
  } else {
    Src = SavingCard;
  }

  return (
    <CardStyled>
      <div className="Card">
        <img src={Src || SpendCard}></img>
      </div>
      <div className="detail">
        <p> Account number: {props.AccountNumber} </p>

        <p style={{ display: Style2 }}> Account type: {props.AccountType} </p>

        <p style={{ display: Style }}> Term: {props.Term} </p>
        <p style={{ display: Style }}> Maturity date: {props.MaturityDate} </p>
        <p style={{ display: Style }}> Interest rate: {props.InterestRate} </p>
        <p style={{ display: Style }}>
          {" "}
          Total interest: {props.TotalInterest}{" "}
        </p>

        <p> Current balance: {props.CurrentBalance} </p>
        <p> Status: {props.Status} </p>
      </div>
    </CardStyled>
  );
}
