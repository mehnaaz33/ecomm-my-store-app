import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { Provider } from "react-redux";
import store from './redux/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route component={<Default/>} />
        </Routes>
        <Modal />
      </Provider>
    );
  }
}

export default App;
