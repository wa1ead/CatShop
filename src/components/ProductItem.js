import React from "react";
import { NavLink } from "react-router-dom";

function ProductItem(props) {
  const product = props.element;
  return (
    <div className="card" style={{ margin: "2px" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: {product.price}$</p>
        <NavLink to={"/product/:" + product.id} className="btn btn-primary">
          Details
        </NavLink>
      </div>
    </div>
  );
}
export default ProductItem;
