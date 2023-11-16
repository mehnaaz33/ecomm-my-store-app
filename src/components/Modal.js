import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../redux/actions";

const Modal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modalOpen);
  const { image, title, price } = useSelector((state) => state.modalProduct);
  return (
    <>
      {!modalOpen ? null :
        (
          <ModalContainer>
            <div className="container">
              <div className="row">
                <div
                  id="modal"
                  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                >
                  <h5>item added to the cart</h5>
                  <img src={image} className="img-fluid" alt="product" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price: $ {price}</h5>
                  <Link to="/">
                    <ButtonContainer onClick={() => dispatch(closeModal())}>
                      store
                    </ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonContainer cart onClick={() => dispatch(closeModal())}>
                      Go to cart
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContainer>
        )}
    </>
  )
}
export default Modal

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
