import React, { Component } from "react";
import InputForm from "./styled";
export default class index extends Component {
  render() {
    return (
      <InputForm Top={this.props.Top} Width={this.props.Width}>
        <p>{this.props.title}</p>
        <input type={this.props.type} value={this.props.value}></input>
      </InputForm>
    );
  }
}
