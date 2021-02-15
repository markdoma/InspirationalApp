import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSigninIn, ...otherProps }) => (
  <button
    className={`${isGoogleSigninIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
