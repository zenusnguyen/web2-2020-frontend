import React, { Component } from "react";
import InputForm from "./styled";
export default function index(props) {
  return (
    <InputForm Top={props.Top} Width={props.Width}>
      <p>{props.title}</p>
      <input
        onComplete={props.onComplete}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        defaultValue={props.value}
        name={props.name}
        readOnly={props.readonly}
        placeholder={props.placeholder}
      ></input>
    </InputForm>
  );
}
