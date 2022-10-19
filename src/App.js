import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import CartIcon from "./components/CartIcon";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light mt-20">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">
              CatsStore
            </NavLink>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className="nav-link">
                    Products{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cat" className="nav-link">
                    Cat
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <CartIcon />
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
