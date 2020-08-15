import React, { Component } from "react";
import TextAreaForm from "./styled";
export default function Editor(props) {
 
  return (
    <TextAreaForm Width={props.Width} Bot={props.Bot}>
      <p>{props.title}</p>
      <textarea defaultValue={props.value} onChange={props.onChange}></textarea>
    </TextAreaForm>
  );
}
