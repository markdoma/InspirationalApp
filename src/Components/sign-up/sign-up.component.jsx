import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SigUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign Up wit your Email and Password</span>
        <form className="sign-up-form"></form>
      </div>
    );
  }
}
