import React from "react";
import CardStyled from "./styled";
import SavingCard from "../../assets/savings.svg";
import Button from "../Button";
import SpendCardGold from "../../assets/spend-gold.svg";
import SpendCardSilver from "../../assets/silver.svg";
import SpendCardPlatinum from "../../assets/platinum.svg";

export default function index(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.unit || "VND",
  });

  let Src = "";
  if (props.Card_type === "spend") {
    if (props.Spend_type == 1) {
      Src = SpendCardSilver;
    } else if (props.Spend_type == 2) {
      Src = SpendCardGold;
    } else {
      Src = SpendCardPlatinum;
    }
  } else {
    Src = SavingCard;
  }
  const status = () => {
    if (props.Status == "active") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p className="text">Status: </p>
          <p
            className="text"
            style={{
              color: "#6CD089",
              marginLeft: "4px",
              textTransform: "capitalize",
            }}
          >
            {` ${props.Status}`}
          </p>
        </div>
      );
    } else if (props.Status == "block") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p className="text">Status: </p>
          <p
            className="text"
            style={{
              color: "#F45C59",
              marginLeft: "4px",
              textTransform: "capitalize",
            }}
          >
            Blocked
        </p>
        </div>
      );
    } else {
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p className="text">Status: </p>
        <p
          className="text"
          style={{
            color: "#F45C59",
            marginLeft: "4px",
            textTransform: "capitalize",
          }}
        >
          Closed
        </p>
      </div>
    );
  };

  return (
    <CardStyled>
      <div className="Card">
        <img src={Src}></img>
      </div>
      <div className="detail">
        <p className="text"> Number: {props.Number} </p>
        <p className="text">
          Current balance: {` ${formatter.format(props.Balance)}`}
        </p>
        {status()}
        <Button
          onClick={props.onClick}
          Width="140px"
          Height="40px"
          Top="2px"
          Left="0px"
          title="Details"
          BackgroundColor="#4F6EF6"
          Display="none"
        ></Button>
      </div>
    </CardStyled>
  );
}
