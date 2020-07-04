import React from "react";
import ProfilePage from "./containers/ProfilePage";
import SignInPage from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import MaganerAccountPage from "./containers/MaganerAccountPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <SignInPage></SignInPage>
     <RegisterPage></RegisterPage> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <MaganerAccountPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
