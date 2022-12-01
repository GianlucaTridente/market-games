import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <CartProvider>
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
