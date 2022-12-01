import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <Link className="cart-cart" to={"/cart"}>
        <ShoppingCartIcon fontSize="large" sx={{ marginLeft: "30px" }} />
        <span>{totalProducts() || ""}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
