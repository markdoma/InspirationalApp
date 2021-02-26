import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/header/header.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-out/sign-in-and-sign-out.component";

class App extends React.Component {
  unsubsribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({ currentUser: user });

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);

      //createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
