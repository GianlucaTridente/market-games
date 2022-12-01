import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useCartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cart-div">
          <p>No elements</p>
          <Link className="cart-buy" to="/">
            Go to buy
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <div className="remove-div">
          <button className="noselect" onClick={() => clearCart()}>
            <span className="text">CLEAR</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
        <h2 className="total">Total: ${totalPrice()} </h2>

        <Link to="/checkout">
          <div className="button-div">
            <button class="buttonn-continue">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text-continue">Continue</span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
