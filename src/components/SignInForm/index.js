import React, { Component, useState } from "react";
import SignInForm from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import auth from "../../utils/auth";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let history = useHistory();
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:1337/auth/local", {
      identifier: email,
      password: password,
    });
    if (data.jwt) {
      const userTemp = await axios.get(
        `http://localhost:1337/customer-infors/?id=${data.user.user_info}`
      );
      console.log("userTemp: ", userTemp);
      await localStorage.setItem("token", data.jwt);
      await localStorage.setItem("userId", data.user.user_info);
      await localStorage.setItem("username", data.user.username);
      await localStorage.setItem("email", data.user.email);

      history.push("/profile");
    }
  };

  return (
    <SignInForm>
      <p className="SignInTitle">Sign In</p>
      <InputForm
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        title="Email "
      ></InputForm>
      <InputForm
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        title="Password "
      ></InputForm>
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
