import React, { Component } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";

function SpendCard() {
  return (
    <div className="spendCard">
      <div className="selector">
        <p>Account type</p>
        <select>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>
      <div className="selector">
        <p>Currency unit</p>
        <select>
          <option value="VND">₫ VND - Vietnamese Dong</option>
          <option value="USD"> $ USD- Dollar</option>
        </select>
      </div>
      <div className="accountNumber">
        <p>Your account number</p>
        <input type="text" disabled={true} value="01234567890"></input>
      </div>
    </div>
  );
}

export default class index extends Component {
  render() {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle"> Open new account</p>
          <p>I want to open </p>
          <form className="selectCard">
           
            <input type="radio" name="gender" defaultValue="spend" /> Spend
            account
            <br />
            <input type="radio" name="gender" defaultValue="saving" /> Savings
            account
          </form>
          <SpendCard></SpendCard>
        </div>
      </MaganerAccountStyled>
    );
  }
}
