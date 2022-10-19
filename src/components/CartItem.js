import React from "react";
import { NavLink } from "react-router-dom";

function CartItem(props) {
  const product = props.element;
  const quantity = 4;
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: {product.price}$</p>
        <br></br>
        Quantity: {quantity}
        <br></br>
        Total: {quantity * product.price}$
        <p className="card-text">{product.description}</p>
        <NavLink to="#" className="btn btn-danger">
          <i className="fa fa-trash"></i>
          Delete
        </NavLink>
      </div>
    </div>
  );
}
export default CartItem;
