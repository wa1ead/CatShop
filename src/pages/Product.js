import React, { Component } from "react";
import { getById } from "../api/products";

class Product extends Component {
  state = {
    loading: true,
    quantity: 0,
    product: [],
  };

  componentDidMount() {
    const id = 2;
    getById(id).then((product) => {
      this.setState({ product, loading: false });
    });
  }
  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 0) return;
    this.setState({
      quantity: value,
    });
  };

  render() {
    if (this.state.loading) return "Loading...";
    const product = this.state.product;
    const quantity = this.state.quantity;
    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            <img src={product.image} width={"100%"} />
          </div>
          <div className="col-lg-6">
            <h1>{product.name}</h1>
            <p>Price: {product.price}$</p>
            <p>{product.description}</p>
            <br></br>
            <input
              type="number"
              value={quantity}
              onChange={this.handleQuantity}
            />
            <br></br>
            <p>Total: {quantity * product.price}</p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
