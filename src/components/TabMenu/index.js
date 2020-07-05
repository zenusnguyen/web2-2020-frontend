import React from "react";
import TabStyle from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function index({ title, src ,link}) {
  return (
    <Link to={link}>
      <TabStyle>
        <img src={src}></img>
        <p>{title}</p>
      </TabStyle>
    </Link>
  );
}
