import React, { Component } from "react";
import Register from "./styled";
import InputForm from "../InputForm";
import Button from "../Button";
import DatePicker from "../DatePicker";
import TextArea from "../TextArea";
import PhotoUpload from "../PhotoUpload";
export default function RegisterForm() {
  const onChangeEmail = (e) => {
    console.log("e: ", e.target.value);
  };

  return (
    <Register>
      <p className="SignInTitle">Create Account</p>
      <InputForm
        onChange={(e) => onChangeEmail(e)}
        type="email"
        title="Email "
      ></InputForm>
      <InputForm type="text" title="User Name "></InputForm>
      <InputForm type="password" title="Password "></InputForm>
      <InputForm type="password" title="Confirm Password "></InputForm>
      <InputForm type="text" title="Full Name "></InputForm>
      <div className="dualColumn">
        <InputForm
          type="number"
          title=" Phone number  "
          Width="160px"
        ></InputForm>
        <DatePicker title="Date of birth"></DatePicker>
      </div>
      <TextArea type="text" title="Current address "></TextArea>
      <div className="dualColumn" style={{ marginTop: "20px" }}>
        <InputForm
          type="number"
          title=" ID/ Passport number  "
          Width="160px"
        ></InputForm>
        <DatePicker title="Date of birth"></DatePicker>
      </div>
      <PhotoUpload></PhotoUpload>
      <Button Top="36px" title="Request"></Button>
      <div className="create">
        <p>Don’t have an account? </p>
        <p className="createHere">Create here</p>
      </div>
    </Register>
  );
}
