import React, { useState } from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend-gold.svg";
import SavingCard from "../../assets/savings.svg";
export default function AccountCard({
  Src,
  TypeCard,
  Onclick,
  //share
  AccountNumber,
  CurrentBalance,
  Status,
  //spend account only
  AccountType,
  //savings account only
  Term,
  MaturityDate,
  InterestRate,
  TotalInterest,
}) {
  let Style, Style2 = "";
  if (Term === undefined) {
    Style2 = "";
    Style = "none";
  } else {
    Style2 = "none";
    Style = "";
  }
  if (TypeCard === null) {
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
        <p> Account number: {AccountNumber} </p>

        <p style={{ display: Style2 }}> Account type: {AccountType} </p>

        <p style={{ display: Style }}> Term: {Term} </p>
        <p style={{ display: Style }}> Maturity date: {MaturityDate} </p>
        <p style={{ display: Style }}> Interest rate: {InterestRate} </p>
        <p style={{ display: Style }}> Total interest: {TotalInterest} </p>

        <p> Current balance: {CurrentBalance} </p>
        <p> Status: {Status} </p>
      </div>
    </CardStyled>
  );
}
