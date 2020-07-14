import React, { Component } from "react";
import InputForm from "./styled";
export default function index(props) {
  return (
    <InputForm Top={props.Top} Width={props.Width}>
      <p>{props.title}</p>
      <input
        // required
        onChange={props.onChange}
        type={props.type}
        defaultValue={props.value}
        name = {props.name}
      ></input>
    </InputForm>
  );
}
