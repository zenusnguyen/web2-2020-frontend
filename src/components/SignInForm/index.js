import React, { Component } from "react";
import SignInForm from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class index extends Component {
  handleClick() {}
  render() {
    return (
      <SignInForm>
        <p className="SignInTitle">Sign In</p>
        <InputForm type="email" title="Email "></InputForm>
        <InputForm type="password" title="Password "></InputForm>
        <Button Top="36px" title="Sign In"></Button>
        <div className="create">
          <p>Don’t have an account? </p>
          <p className="createHere">
            <Link to="/register"> Create here</Link>
          </p>
        </div>
      </SignInForm>
    );
  }
}
