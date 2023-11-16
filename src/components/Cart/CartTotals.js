import React from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

export default function CartTotals() {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cartTotal);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sl-5 ml-md-auto col-sm-8 text-capitalize- text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                clear cart
              </button>
            </Link>
            {/* <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5> */}
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
