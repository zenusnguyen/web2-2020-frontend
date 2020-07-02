import React, { Component } from "react";
import InputForm from "./styled";
export default class index extends Component {
  render() {
    console.log("this.props.width: ", this.props);
    return (
      <InputForm Width={this.props.Width}>
        <p>{this.props.title}</p>
        <input type={this.props.type}></input>
      </InputForm>
    );
  }
}
