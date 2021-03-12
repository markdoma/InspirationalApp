import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = () => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>PRODUCT</span>
      </div>
      <div className="header-block">
        <span>DESCRIPTION</span>
      </div>
      <div className="header-block">
        <span>QUANTITY</span>
      </div>
      <div className="header-block">
        <span>PRICE</span>
      </div>
      <div className="header-block">
        <span>REMOVE</span>
      </div>
    </div>
  </div>
);

export default CheckoutPage;
