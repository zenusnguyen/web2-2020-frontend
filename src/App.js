import React from "react";
import SignInPage from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import Dashborad from "./Dashborad";
import DashboradAdmin from "./DashboradAdmin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import "./App.css";

function SignOut() {
  let history = useHistory();

  history.push("/");
  if (localStorage) {
    localStorage.clear();
  }

  if (sessionStorage) {
    sessionStorage.clear();
  }
  return <SignInPage></SignInPage>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignInPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/dashboard">
            <Dashborad />
          </Route>
          <Route path="/admin">
            <DashboradAdmin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
