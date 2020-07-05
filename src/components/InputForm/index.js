import React, { Component } from "react";
import InputForm from "./styled";
export default function index(props) {
  return (
    <InputForm Top={props.Top} Width={props.Width}>
      <p>{props.title}</p>
      <input
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      ></input>
    </InputForm>
  );
}
