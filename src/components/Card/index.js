import React from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
export default function index(props) {
  let Src = SpendCard;
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
        <p> Number : {props.Number} </p>
        <p> Type : {props.Type} </p>
        <p> Created : {props.Created} </p>
        <p> Status: {props.Status} </p>
        <Button
          // onclick={}
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
