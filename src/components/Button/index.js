import Button from "./styled";
// import Icon from "../../../public/assets/add-circle.png"
import React from "react";

export default function index({
  onClick,
  title,
  Top,
  Width,
  Height,
  BackgroundColor,
  Src,
  Display,
}) {
  console.log("onClick: ", onClick);
  return (
    <Button
      Display={Display}
      onClick={onClick}
      Top={Top}
      Width={Width}
      Height={Height}
      BackgroundColor={BackgroundColor}
    >
      <img src={Src || null}></img>
      <p>{title} </p>
    </Button>
  );
}
