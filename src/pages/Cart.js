import React from "react";
import CartItem from "../components/CartItem";
import { getAll as getAllProducts } from "../api/products";

class Cart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    getAllProducts().then((Products) => {
      this.setState({ products: Products });
    });
  }

  render() {
    const myArray = this.state.products;
    return (
      <div>
        <h1>Cart</h1>
        <div className="row">
          {myArray.map((item) => (
            <div className={"col-3"} key={item.id}>
              <CartItem element={item} />
            </div>
          ))}
        </div>
        <br></br>
        <h3>Total: 3000$</h3>
        <br></br>
        <button className="btn btn-primary" style={{ width: "100%" }}>
          Pay
        </button>
      </div>
    );
  }
}
export default Cart;
