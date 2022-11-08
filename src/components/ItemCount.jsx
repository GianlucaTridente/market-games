import React, { useState, useEffect } from "react";
import "../App.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter-button">
      <button className="button-less" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span className="counter-number">{count}</span>
      <button
        className="button-more"
        disabled={count >= stock}
        onClick={increase}
      >
        +
      </button>
      <div>
        <button
          className="cart-button"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
