import React, { Component } from "react";
import SignInPageStyle from "./styled";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";
export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Header></Header>
        <SignInPageStyle>
          <SignInForm></SignInForm>
        </SignInPageStyle>
      </div>
    );
  }
}
