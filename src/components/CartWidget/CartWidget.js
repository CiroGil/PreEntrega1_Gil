import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const CartWidget = () => {
  return (
        <div>
          <Container>
            <h2><BsCartFill /></h2>
            <h3>0</h3>
          </Container>
        </div>
        )
}

export default CartWidget;
