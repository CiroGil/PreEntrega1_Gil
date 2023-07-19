import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const CartWidget = () => {
  return (
    <div>
    <button type="button" className="btn colorCartButton position-relative">
    <BsCartFill/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
    </button>
  </div>
        )
}

export default CartWidget;

