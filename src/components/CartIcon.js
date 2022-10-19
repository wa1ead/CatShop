import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";

function CartIcon() {
  return (
    <Link to="/cart">
      <div id="cart-icon">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badge-danger">5</span>
      </div>
    </Link>
  );
}
export default CartIcon;
