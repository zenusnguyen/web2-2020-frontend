import React, { Component } from "react";
import SignInForm from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
export default class index extends Component {
  handleClick() {
    alert("hihihi");
  }
  render() {
    return (
      <SignInForm>
        <p className="SignInTitle">Sign In</p>
        <InputForm type="email" title="Email "></InputForm>
        <InputForm type="password" title="Password "></InputForm>
        <Button onClick={this.handleClick} Top="36px" title="Sign In"></Button>
        <div className="create">
          <p>Don’t have an account? </p>
          <p onClick={this.handleClick} className="createHere">
            Create here
          </p>
        </div>
      </SignInForm>
    );
  }
}
