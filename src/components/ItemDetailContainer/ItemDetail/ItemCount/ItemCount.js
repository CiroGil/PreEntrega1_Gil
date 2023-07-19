import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
      <div className="container mt-3" id="itemcount">
      <div className="row mb-3">
        <div className="col-md-3">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-dark" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-outline-dark btn-counter">{counter}</button>
            <button type="button" className="btn btn-outline-dark" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <button type="button" className="btn btn-outline-dark btn-add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
    )
}

export default ItemCount;