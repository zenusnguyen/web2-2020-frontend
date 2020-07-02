import React, { Component } from "react";
import TextAreaForm from "./styled";
export default class index extends Component {
  render() {
    
    return (
      <TextAreaForm Width={this.props.Width}>
        <p>{this.props.title}</p>
        <textarea type={this.props.type}></textarea>
      </TextAreaForm>
    );
  }
}
