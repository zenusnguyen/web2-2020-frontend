import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirect, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to={redirect} />;

export default ProtectedRoute;
