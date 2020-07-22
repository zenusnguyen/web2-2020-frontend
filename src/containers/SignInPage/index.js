import React, { Component, useEffect, useState } from "react";
import SignInPageStyle from "./styled";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
  const Height = `${window.innerHeight - 64}px`;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let history = useHistory();
  useEffect(() => {
    // Update the document title using the browser API
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  });
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:1337/auth/local", {
      identifier: email,
      password: password,
    });
    if (data.jwt) {
      const userTemp = await axios.get(
        `http://localhost:1337/customer-infors/?id=${data.user.user_info}`
      );
      await localStorage.setItem("token", data.jwt);
      await localStorage.setItem("userAccount", JSON.stringify(data.user));
      await localStorage.setItem("userInfo", JSON.stringify(userTemp.data[0]));
      history.push("/profile");
    }
  };
  return (
    <div style={{ width: "100%", height: Height }}>
      <Header></Header>
      <SignInPageStyle>
        {/* <SignInForm></SignInForm> */}
        <div className="SignInForm">
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
          <button onClick={handleClick} className="registerButton">
            Sign in
          </button>
          <div className="create">
            <p>Don’t have an account? </p>
            <p className="createHere">
              <Link to="/register"> Create here</Link>
            </p>
          </div>
        </div>
      </SignInPageStyle>
    </div>
  );
}
