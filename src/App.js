import React from 'react';
import logo from './logo.svg';
import SignInPage from "./containers/SignInPage"
import RegisterPage from "./containers/RegisterPage"
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <SignInPage></SignInPage> */}
     <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
