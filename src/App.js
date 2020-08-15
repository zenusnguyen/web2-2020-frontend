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
  const authFake = () => {
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
    setIsAmin(JSON.parse(localStorage.getItem("isAdmin")));
  };
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const [isAmin, setIsAmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin"))
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signin">
            <SignInPage authFake={authFake} />
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
            isAllowed={isAmin}
            path="/all-customers"
            redirect="/signin"
            component={AllCardsPage}
          />
          <ProtecedRoute
            isAllowed={isAmin}
            path="/pending-requests"
            redirect="/signin"
            component={PendingRequestPage}
          />
          <ProtecedRoute
            isAllowed={isAmin}
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
