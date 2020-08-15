import React, { useState } from "react";
import SignInPageStyle from "./styled";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import { config } from "../../configs/server";
import * as _ from "lodash";
export default function SignIn({ authFake }) {
  const alert = useAlert();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let history = useHistory();
  if (
    JSON.parse(
      localStorage.getItem("token") &&
        _.get(JSON.parse(localStorage.getItem("userAccount")), "role.name") ===
          "Admin"
    )
  ) {
    history.push("/all-customers");
  } else if (
    localStorage.getItem("token") &&
    _.get(JSON.parse(localStorage.getItem("userAccount")), "role.name") ===
      "Authenticated"
  ) {
    history.push("/profile");
  }

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

            if (data.user.role.name == "Admin") {
              await localStorage.setItem("isAdmin", JSON.stringify("true"));
            } else {
              await localStorage.setItem("isLogin", JSON.stringify("true"));
            }
            authFake();
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
