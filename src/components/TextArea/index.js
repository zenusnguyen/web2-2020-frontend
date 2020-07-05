import React, { Component } from "react";
import TextAreaForm from "./styled";
export default function Editor(props) {
  console.log('props: ', props);
  return (
    <TextAreaForm Width={props.Width}>
      <p>{props.title}</p>
      <textarea onchange={props.onChange}></textarea>
    </TextAreaForm>
  );
}
