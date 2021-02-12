import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/header/header.component";

import SignInAndSignUpPage from "./Pages/sign-in-and-sign-out/sign-in-and-sign-out.component";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
