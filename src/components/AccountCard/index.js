import React, { useState } from "react";
import CardStyled from "./styled";
import SpendCardGold from "../../assets/spend-gold.svg";
import SpendCardSilver from "../../assets/silver.svg";
import SpendCardPlatinum from "../../assets/platinum.svg";
import SavingCard from "../../assets/savings.svg";

export default function AccountCard(props) {
  console.log("props: ", props);
  const status = () => {
    if (props.Status == "active") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "0",
          }}
        >
          <p style={{ margin: "0" }}>Status: </p>
          <p style={{ color: "blue", margin: "0" }}> {"  " + props.Status} </p>
        </div>
      );
    } else {
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "0",
        }}
      >
        <p style={{ margin: "0" }}>Status: </p>
        <p style={{ color: "red", margin: "0" }}> {"  " + props.Status} </p>
      </div>
    );
  };
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
  const renderCloseDate = () => {
    if (props.close_date)
      return (
        <div style={{ display: "flex", flexDirection: "row", marginTop: "12px" }}>
          <p style={{ margin: "0" }}>Close date: </p>
          <p style={{ color: "red", margin: "0" }}>
            {" "}
            {props.close_date}
          </p>
        </div>
      );
  };
  if (props.Card_type === "saving") {
    return (
      <CardStyled>
        <div className="Card">
          <img src={Src}></img>
        </div>
        <div className="detail">
          <p> Account number: {props.AccountNumber} </p>
          <p> Term: {props.Term} month</p>
          <p>Maturity date: {props.MaturityDate} </p>
          <p>Interest rate: {props.InterestRate}% </p>
          <p> Current balance: {props.CurrentBalance} </p>
          {status()}
          {renderCloseDate()}
          <p></p>
        </div>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled>
        <div className="Card">
          <img src={Src}></img>
        </div>
        <div className="detail">
          <p> Account number: {props.AccountNumber} </p>
          <p> Account type: {cardType} </p>
          <p> Current balance: {props.CurrentBalance} </p>
          {status()}
        </div>
      </CardStyled>
    );
  }
}
