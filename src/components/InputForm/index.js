import React, { Component } from "react";
import InputForm from "./styled";
export default class index extends Component {
  render() {
    return (
      <InputForm>
        <p>{this.props.title}</p>
        <input type={this.props.type} ></input>
      </InputForm>
    );
  }
}
