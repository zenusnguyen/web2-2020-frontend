import React from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
export default function index({
  Src,
  Number,
  Type,
  Created,
  Status,
  TypeCard,
  Onclick,
}) {
  if (TypeCard === null) {
    Src = SpendCard;
  } else {
    Src = SavingCard;
  }

  const HandlerClick = () => {
    console.log("??????????????????");
    return <div></div>;
  };

  return (
    <CardStyled>
      <div className="Card">
        <img src={Src || SpendCard}></img>
      </div>
      <div className="detail">
        <p> Number : {Number} </p>
        <p> Type : {Type} </p>
        <p> Created : {Created} </p>
        <p> Status: {Status} </p>
        <Button
          onclick={HandlerClick}
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
