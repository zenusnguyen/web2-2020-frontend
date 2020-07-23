import React from "react";
import ProfilePage from "./containers/ProfilePage";
import SignInPage from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import ManageAccountPage from "./containers/MaganerAccountPage";
import CreateCardPage from "./containers/CreateCardPage";
import TransferPage from "./containers/TransferPage";
import AccountDetailPage from "./containers/AccountDetailPage";
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
          s
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/manage">
            <ManageAccountPage />
          </Route>
          <Route path="/create">
            <CreateCardPage />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/transfer">
            <TransferPage />
          </Route>
          <Route path="/detail">
            <AccountDetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
