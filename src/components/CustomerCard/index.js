import React, { useState } from "react";
import CardStyled from "./styled";
import Icon from "../../assets/person.png";
import Button from "../Button";

export default function HistoryCard(props) {
  let Style,
    Style2 = "";
  if (props.Amount < 0) {
    Style = "#F45C59";
  } else {
    Style = "#56CD67";
  }

  const status = () => {
    if (props.Status == "active") {
      return (
        <div
          className="status"
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "0",
            background: "#56CD67",
          }}
        >
          <p style={{ color: "white", margin: "0",textTransform: "capitalize" }}> {"  " + props.Status} </p>
        </div>
      );
    } else {
    }
    return (
      <div
        className="status"
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "0",
          background: "#F45C59"
        }}
      >
        <p style={{ color: "white", margin: "0" }}> {"Blocked"} </p>
      </div>
    );
  };

  if (props.username !== "admin") {
    return (
      <CardStyled>
        <div className="icon">
          <img src={Icon}></img>
        </div>
        <div className="detail-left">
          <div className="withStatus">
            <p>{props.username || " "} </p>
            <div>{status()}</div>
          </div>
          <p className="subtext"> {props.email || "zenusnguyen@gmail.com"} </p>
        </div>
        <div className="detail-right">
          <button
            onClick={props.onClick}
            style={{
              width: "140px",
              height: "40px",
              backgroundColor: "#4F6EF6",
              border: "0px",
              color: "white",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            Details
          </button>
        </div>
      </CardStyled>
    );
  } else {
    return <div></div>;
  }
}
