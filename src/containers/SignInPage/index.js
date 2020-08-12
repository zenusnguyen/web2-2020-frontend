import React, { Component, useEffect, useState } from "react";
import SignInPageStyle from "./styled";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import alertify from "alertifyjs";
import axios from "axios";
import { useAlert } from "react-alert";
import { config } from "../../configs/server";
export default function SignIn({ auth }) {
  console.log("auth: ", auth);
  const alert = useAlert();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let history = useHistory();

  const handleClick = async () => {
    await axios
      .post(`${config.server}/auth/local`, {
        identifier: email,
        password: password,
      })
      .then(async function (response) {
        const data = response.data;
        if (response.data.user.status != "active") {
          alert.error("Your account is not active");
        } else {
          auth(true);
          if (response.data.jwt) {
            const userTemp = await axios.get(
              `${config.server}/customer-infors/?id=${data.user.user_info}`,
              {
                headers: {
                  Authorization: `Bearer ${data.jwt}`,
                },
              }
            );
            await localStorage.setItem("token", data.jwt);
            await localStorage.setItem(
              "userAccount",
              JSON.stringify(data.user)
            );
            await localStorage.setItem(
              "isLogin",
              JSON.stringify("true")
            );
            await localStorage.setItem(
              "userInfo",
              JSON.stringify(userTemp.data[0])
            );

            if (data.user.role.name === "Admin") {
              history.push("/all-customers");
            } else {
              history.push("/profile");
            }
          }
        }
      })
      .catch(function (error) {
        console.log("error: ", error);
        alert.error("invalid email or password");
      });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        display: "flex",
      }}
    >
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
          <Button
            onClick={handleClick}
            Width="350px"
            title="Sign in"
            Top="12px"
            Left="0px"
            BackgroundColor={"#feba46"}
          ></Button>
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
