import Button from "./styled";
// import Icon from "../../../public/assets/add-circle.png"
import React from "react";

export default function index(props) {
  // console.log('propsssssssssss: ', props.onClick);
 

  return (
    <Button
      Display={props.Display}
      onClick={props.onClick}
      Top={props.Top}
      Width={props.Width}
      Height={props.Height}
      BackgroundColor={props.BackgroundColor}
    >
      {/* <img src={props.Src || null}></img> */}
      <p>{props.title} </p>
    </Button>
  );
}
