import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { useSelector } from 'react-redux';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
    return (
      <section>
        {/* <ProductConsumer>
          {value => {
            const { cart } = value; */}
            {cart.length > 0?
              (
                <React.Fragment>
                  <Title name="your" title="Cart" />
                  <CartColumns />
                  <CartList cart={cart} />
                  <CartTotals />
                </React.Fragment>
              ):
             <EmptyCart />
            }
          {/* }} */}
        {/* </ProductConsumer> */}
      </section>
    );
}

export default Cart