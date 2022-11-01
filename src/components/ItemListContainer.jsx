import React from "react";
import "../App.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemList">{greeting ? <p>Bienvenide</p> : <p sx={{ color: "white" }}>No sos bienvenide</p>}</div>
  );
};

export default ItemListContainer;
