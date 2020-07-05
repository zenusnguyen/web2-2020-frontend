import React, { Component, useEffect } from "react";
import SignInPageStyle from "./styled";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";
import { useHistory } from "react-router-dom";
export default function SignIn() {
  let history = useHistory();
  useEffect(() => {
    // Update the document title using the browser API
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header></Header>
      <SignInPageStyle>
        <SignInForm></SignInForm>
      </SignInPageStyle>
    </div>
  );
}
