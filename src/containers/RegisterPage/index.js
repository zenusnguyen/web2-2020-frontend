import React, { Component } from "react";
import SignInPageStyle from "./styled";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { useHistory } from "react-router-dom";
export default function Register() {
  let history = useHistory();
  let token = localStorage.getItem("token");

  if(!token) {
  history.push("/");
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header></Header>
      <SignInPageStyle>
        <RegisterForm></RegisterForm>
      </SignInPageStyle>
    </div>
  );
}
