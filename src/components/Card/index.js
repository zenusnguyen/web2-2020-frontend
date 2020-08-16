import React from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
export default function index(props) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.unit || "VND",
  });

  let Src = SpendCard;
  if (props.Card_type === "spend") {
    Src = SpendCard;
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
          <p className="text" style={{ color: "blue", marginLeft: "29px" }}>
            {" "}
            {"  " + props.Status}{" "}
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
        <p className="text" style={{ color: "red", marginLeft: "29px" }}>
          {" "}
          {"  " + props.Status}{" "}
        </p>
      </div>
    );
  };

  return (
    <CardStyled>
      <div className="Card">
        <img src={Src || SpendCard}></img>
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
