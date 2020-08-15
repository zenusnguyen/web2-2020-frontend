import React from "react";
import TabStyle from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function TabMenu({ title, src, link, onClick }) {
  return (
    <Link to={link}>
      {/* <TabStyle onClick={onClick}> */}
      <TabStyle onClick={onClick}>
        <img src={src}></img>
        <p>{title}</p>
      </TabStyle>
    </Link>
  );
}
