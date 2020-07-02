import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderStyle from "./styled";
import YellowIcon from "../../assets/yellow.png";
export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <HeaderStyle>
        <img className="logo" src={YellowIcon} alt="logo"></img>
      </HeaderStyle>
    );
  }
}
