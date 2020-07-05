import React, { Component } from "react";
import TextAreaForm from "./styled";
export default function Editor(props) {
 
  return (
    <TextAreaForm Width={props.Width}>
      <p>{props.title}</p>
      <textarea value={props.value} onchange={props.onChange}></textarea>
    </TextAreaForm>
  );
}
