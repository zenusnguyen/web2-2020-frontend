import React, { useState } from "react";
import CardStyled from "./styled";
import SpendCardGold from "../../assets/spend-gold.svg";
import SpendCardSilver from "../../assets/silver.svg";
import SpendCardPlatinum from "../../assets/platinum.svg";
import SavingCard from "../../assets/savings.svg";

export default function AccountCard(props) {
  console.log("props: ", props);
  let Style,
    Style2 = "";
  if (props.Term === undefined) {
    Style2 = "";
    Style = "none";
  } else {
    Style2 = "none";
    Style = "";
  }
  let cardType = "";
  let Src = "";
  if (props.Card_type === "spend") {
    if (props.Spend_type == 1) {
      cardType = "silver";
      Src = SpendCardSilver;
    } else if (props.Spend_type == 2) {
      cardType = "Gold";
      Src = SpendCardGold;
    } else {
      cardType = "Platinum";
      Src = SpendCardPlatinum;
    }
  } else {
    Src = SavingCard;
  }

  return (
    <CardStyled>
      <div className="Card">
        <img src={Src}></img>
      </div>
      <div className="detail">
        <p> Account number: {props.AccountNumber} </p>

        <p style={{ display: Style2 }}> Account type: {cardType} </p>

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
