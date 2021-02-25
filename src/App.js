import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/header/header.component";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-out/sign-in-and-sign-out.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubsribeFromAuth = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({ currentUser: user });

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else this.setState({ currentUser: userAuth });

      //createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
