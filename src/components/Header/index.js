import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderStyle from "./styled";
import YellowIcon from "../../assets/yellow.svg";
export default function index(props) {
  return (
    <HeaderStyle
      Height={props.Height}
      Shadow={props.Shadow}
      CTA={props.CTA}
      Href={props.Href}
    >
      <a href="/">
        <img className="logo" src={YellowIcon} alt="logo"></img>
      </a>
      <a className="cta" href={props.Href}>
        <p>Sign in</p>
      </a>
    </HeaderStyle>
  );
}
