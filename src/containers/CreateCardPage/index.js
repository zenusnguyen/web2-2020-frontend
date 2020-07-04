import React, { useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import InputForm from "../../components/InputForm";

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
      <Button Width="190px" title="Open Card"></Button>
    </div>
  );
}

function SavingCard() {
  return (
    <div className="dualColumn">
      <div className="spendCard">
        <div className="selector">
          <p>Currency unit</p>
          <select>
            <option value="VND">₫ VND - Vietnamese Dong</option>
            <option value="USD"> $ USD- Dollar</option>
          </select>
        </div>
        <div className="selector">
          <p>Term</p>
          <select>
            <option value="Silver">1 month - Interest rate 4.6%</option>
            <option value="Gold">6 month - Interest rate 6.6%</option>
            <option value="Platinum">12 month - Interest rate 8.6%</option>
          </select>
        </div>
        <InputForm
          Top="24px"
          title="Maturity date"
          value=" 23/12/2020"
        ></InputForm>
        <p>Interest payment option </p>
        <form className="selectCard">
          <input type="radio" name="gender" defaultValue="spend" /> Add into my
          Spend account
          <br />
          <input type="radio" name="gender" defaultValue="saving" /> Add to the
          balance and renew for another term
        </form>
        <div className="accountNumber">
          <p>Your account number</p>
          <input type="text" disabled={true} value="01234567890"></input>
        </div>
        <Button Width="190px" title="Open Card"></Button>
      </div>
      <div className="example">
        <InputForm
          title="Example, if you want to deposit"
          value="₫ 1,000,000"
        ></InputForm>
        <InputForm
          title="So the total interest will be"
          value=" ₫ 4,600"
        ></InputForm>
        <InputForm
          title="And your balance at maturity date will be"
          value="₫ 1,004,600"
        ></InputForm>
      </div>
    </div>
  );
}

export default function CreateCard() {
  const [isSaving, setIsSaving] = useState(false);
  const Handler = () => {
    console.log("isSaving: ", isSaving);
    setIsSaving(!isSaving);
  };
  if (isSaving)
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle"> Open new account</p>
          <p>I want to open </p>
          <form className="selectCard">
            <input
              type="radio"
              name="gender"
              onClick={Handler}
              defaultValue="spend"
            />{" "}
            Spend account
            <br />
            <input
              type="radio"
              name="gender"
              onClick={Handler}
              defaultValue="saving"
            />{" "}
            Savings account
          </form>

          <SavingCard></SavingCard>
        </div>
      </MaganerAccountStyled>
    );
  else {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle"> Open new account</p>
          <p>I want to open </p>
          <form className="selectCard">
            <input
              type="radio"
              name="gender"
              onClick={Handler}
              defaultValue="spend"
            />{" "}
            Spend account
            <br />
            <input
              type="radio"
              name="gender"
              onClick={Handler}
              defaultValue="saving"
            />{" "}
            Savings account
          </form>


          <SpendCard></SpendCard>
        </div>
      </MaganerAccountStyled>
    );
  }
}
