import React from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
export default function index(props) {
  console.log("props: ", props);
  // console.log('props: ', props);
  let Src = SpendCard;
  if (props.Card_type === "spend") {
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
        <p> Number : {props.Number} </p>
        <p> Current balance : {props.Balance} </p>
        <p> Status: {props.Status} </p>
        <Button
          onClick={props.onClick}
          Width="140px"
          Height="40px"
          Top="0px"
          title="Details"
          BackgroundColor="#4F6EF6"
          Display="none"
        ></Button>
      </div>
    </CardStyled>
  );
}
