import React, { Component } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
export default class index extends Component {
  render() {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <div className="titleWithButton">
            <p className="SignInTitle"> Manage accounts</p>
            <Link to="/register">
              <Button
                key="1"
                Top="0px"
                title="Add account"
                Width="187px"
                Src={AddIcon}
                Display="flex"
              ></Button>
            </Link>
          </div>
          <div className="listCard">
            <Card></Card>
          </div>
        </div>
      </MaganerAccountStyled>
    );
  }
}
