import React from "react";
import PopUp from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
export default function index(props) {
  return (
    <PopUp>
      <div className="top">
        <p className="title">{props.Title || "Confirmation"} </p>
        <p className="detail">
          {props.Detail ||
            "Are you sure you want to close this account? This action cannot be undone. "}
        </p>
      </div>
      <div className="bot">
        <Button
          Onclick={props.OnClick}
          title={props.btn1 || "Cancel"}
          BackgroundColor="#BDBEBF"
          Width="140px"
          Height="40px"
        ></Button>
        <Button
          Onclick={props.OnClick}
          title={props.btn1 || "Close account"}
          BackgroundColor="#4F6EF6"
          Width="140px"
          Height="40px"
        ></Button>
      </div>
    </PopUp>
  );
}
