import "./App.css";
import { Route, Routes } from "react-router-dom";

import React, { useState } from "react";

import Test from "./Test";
import Home from "./components/Home";
import Header from "./components/Header";
import BrowseShop from "./components/BrowseShop";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  const [text, setText] = useState("DC");
  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <Header cartSize={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<BrowseShop />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

/*
View cart opens side right side bar
Drop down on browse for quick filtering of items
Shop page has filter search bar? 
Card component for each item --> Image, Name, Price, Add to Cart button, a view details button that routes to a new page (/products/{item name})

*/

export default App;
