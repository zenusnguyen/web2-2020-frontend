import React, { useState } from "react";
import SignInPage from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import ProfilePage from "./containers/ProfilePage";
import ManageAccountPage from "./containers/MaganerAccountPage";
import CreateCardPage from "./containers/CreateCardPage";
import TransferPage from "./containers/TransferPage";
import AccountDetailPage from "./containers/AccountDetailPage";
import TransactionHistoryPage from "./containers/TransactionPage";
import LandingPage from "./containers/LandingPage";
import AllCardsPage from "./containers/AllCustomerPage";
import PendingRequestPage from "./containers/PendingReqPage";
import ConfigPage from "./containers/configPage";
import "./App.css";
import ProtecedRoute from "./PrivateRoute";

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
  const [isLogin, setIsLogin] = useState( JSON.parse(localStorage.getItem("isLogin")));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signin">
            <SignInPage auth={setIsLogin} />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <ProtecedRoute
            isAllowed={isLogin}
            path="/profile"
            redirect="/signin"
            component={ProfilePage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/manage"
            redirect="/signin"
            component={ManageAccountPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/create"
            redirect="/signin"
            component={CreateCardPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/transfer"
            redirect="/signin"
            component={TransferPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/detail"
            redirect="/signin"
            component={AccountDetailPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/all-customers"
            redirect="/signin"
            component={AllCardsPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/pending-requests"
            redirect="/signin"
            component={PendingRequestPage}
          />
           <ProtecedRoute
            isAllowed={isLogin}
            path="/configuration"
            redirect="/signin"
            component={ConfigPage}
          />
            <ProtecedRoute
            isAllowed={isLogin}
            path="/history"
            redirect="/signin"
            component={TransactionHistoryPage}
          />
          {/* <Route path="/manage">
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
          <Route path="/configuration">
            <ConfigPage />
          </Route>{" "}
          <Route path="/history">
            <TransactionHistoryPage />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
