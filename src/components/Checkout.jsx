import React from "react";
import { useCartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../App.css";
import { useState, useEffect } from "react";
import swal from "sweetalert2";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("name")) || ""
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("email")) || ""
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("phone")) || ""
  );

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    localStorage.setItem("phone", JSON.stringify(phone));
  }, [phone]);

  function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
      swal.fire({
        title: "Invalid email format",
        text: "Example: name@gmail.com",
        icon: "warning",
        button: "cerrar",
        timer: 3000,
      });
      return false;
    }
    return true;
  }

  function validateTelefono(phone) {
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (reg.test(phone) == false) {
      swal.fire({
        title: "Invalid phone number format",
        text: " Area code without 0 and your number,expl: 1155555555 ",
        icon: "warning",
        button: "cerrar",
      });
      return false;
    }
    return true;
  }

  const order = {
    buyer: {
      name,
      email,
      phone,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    if (totalPrice() == 0) {
      swal.fire({
        title: "Empty cart",
        icon: "info",
        text: "Go to  PRODUCTS  to continue viewing our products",
      });
      return;
    }
    if (!name || !email || !phone) {
      swal.fire({
        title: "Incomplete",
        text: "complete the entire form",
        icon: "warning",
        button: "cerrar",
        timer: 3000,
      });
      return;
    }

    if (validateEmail(email) == false) {
      return;
    }

    if (validateTelefono(phone) == false) {
      return;
    }
    addDoc(ordersCollection, order).then(
      ({ id }) =>
        swal.fire({
          icon: "success",
          title: "Order received successfully",
          text: "We will communicate to your email, your order code is : " + id,
        }),
      clearCart()
    );
  };

  return (
    <div>
      <div className="group">
        <input
          required
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Name</label>
      </div>
      <div className="group">
        <input
          required
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Email</label>
      </div>
      <div className="group">
        <input
          required
          type="text"
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Phone number</label>
      </div>

      <div className="button-checkout">
        <button
          sx={{ margin: "30px" }}
          className="button-checkout-button"
          onClick={handleClick}
        >
          <span>Finish order</span>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
