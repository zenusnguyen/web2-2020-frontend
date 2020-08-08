import React from "react";
import SignInPage from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProfilePage from "./containers/ProfilePage";
import ManageAccountPage from "./containers/MaganerAccountPage";
import CreateCardPage from "./containers/CreateCardPage";
import TransferPage from "./containers/TransferPage";
import AccountDetailPage from "./containers/AccountDetailPage";
import TransactionHistoryPage from "./containers/TransactionPage";
import LandingPage from "./containers/LandingPage";
import AllCardsPage from "./containers/AllCustomerPage";
import PendingRequestPage from "./containers/PendingReqPage";
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
            <LandingPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/manage">
            <ManageAccountPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/create">
            <CreateCardPage />
          </Route>
          <Route path="/transfer">
            <TransferPage />
          </Route>
          <Route path="/detail">
            <AccountDetailPage />
          </Route>
          <Route path="/all-customers">
            <AllCardsPage />
          </Route>
          <Route path="/pending-requests">
            <PendingRequestPage />
          </Route>
          <Route path="/configuration">{/* <AccountDetailPage /> */}</Route>{" "}
          <Route path="/history">
            <TransactionHistoryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
