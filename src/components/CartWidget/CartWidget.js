import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title"><BsCartFill /></h2>
                <h3>0</h3>
            </div>
        </div>
    )
}

export default CartWidget;
