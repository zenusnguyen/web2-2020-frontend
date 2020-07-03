import React, { Component } from "react";
import Register from "./styled";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import TextArea from "../../components/TextArea";
import PhotoUpload from "../../components/PhotoUpload";
import SideMenu from "../../components/SideMenu";
export default class index extends Component {
  handleClick() {
    alert("hihihi");
  }
  render() {
    return (
      <Register>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle">Edit Profile</p>
          <InputForm type="email" title="Email "></InputForm>
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
          <Button
            onClick={this.handleClick}
            Top="36px"
            title="Request"
          ></Button>
        </div>
      </Register>
    );
  }
}
