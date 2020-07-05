import React, { Component, userState } from "react";
import SignInForm from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import auth from "../../utils/auth";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
  let history = useHistory();
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:1337/auth/local", {
      email: "admin@gmail.com",
      identifier: "admin@gmail.com",
      password: "123123",
    });
    if (data.jwt) {
      await localStorage.setItem("token", data.jwt);
      const abc = localStorage.getItem("token");
      history.push("/register");
    }
  };

  return (
    <SignInForm>
      <p className="SignInTitle">Sign In</p>
      <InputForm type="email" title="Email "></InputForm>
      <InputForm type="password" title="Password "></InputForm>
      <Button onClick={handleClick} Top="36px" title="Sign In"></Button>
      <div className="create">
        <p>Don’t have an account? </p>
        <p className="createHere">
          <Link to="/register"> Create here</Link>
        </p>
      </div>
    </SignInForm>
  );
}
