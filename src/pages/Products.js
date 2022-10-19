import React from "react";
import ProductItem from "../components/ProductItem";
import { getAll as getAllProducts } from "../api/products";

class Products extends React.Component {
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
    <h1>Products</h1>;
    return (
      <div>
        <div className="row">
          {myArray.map((item) => (
            <div className={"col-4"} key={item.id}>
              <ProductItem element={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Products;
