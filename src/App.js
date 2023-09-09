import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";

import React, { useState } from "react";

import Home from "./components/Home";
import Header from "./components/Header";
import BrowseShop from "./components/BrowseShop";
import ShoppingCart from "./components/ShoppingCart";
import ViewDetails from "./components/ViewDetails";
import preludeVandal from "./images/PreludetoChaosVandal.jpg";
import rgxVandal from "./images/RGXVandal.jpg";
import gaiasVandal from "./images/GaiasVandal.jpg";
import araxysVandal from "./images/AraxysVandal.jpg";
import chronoPhantom from "./images/chronoPhantom.jpg";
import oniPhantom from "./images/oniPhantom.jpg";
import reconPhantom from "./images/reconPhantom.jpg";
import spectrumPhantom from "./images/spectrumPhantom.jpg";
import chronoSheriff from "./images/chronoSheriff.jpg";
import reaverSheriff from "./images/reaverSheriff.jpg";
import solSheriff from "./images/solSheriff.jpg";
import singularitySheriff from "./images/singularitySheriff.jpg";
import gaiasGhost from "./images/gaiasGhost.jpg";
import mageGhost from "./images/mageGhost.jpg";
import reaverGhost from "./images/reaverGhost.jpg";
import ruinGhost from "./images/ruinGhost.jpg";
function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const allItemArray = [
    {
      name: "Prelude To Chaos Vandal",
      image: preludeVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 1,
    },
    {
      name: "RGX 11z Pro Vandal",
      image: rgxVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 2,
    },
    {
      name: "Gaia's Vengeance Vandal",
      image: gaiasVandal,
      cost: 1775,
      type: "Vandal",
      itemNumber: 3,
    },
    {
      name: "Araxys Vandal",
      image: araxysVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 4,
    },
    {
      name: "Oni Phantom",
      image: oniPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 5,
    },
    {
      name: "Chronovoid Phantom",
      image: chronoPhantom,
      cost: 2175,
      type: "Phantom",
      itemNumber: 6,
    },
    {
      name: "Recon Phantom",
      image: reconPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 7,
    },
    {
      name: "Spectrum Phantom",
      image: spectrumPhantom,
      cost: 2675,
      type: "Phantom",
      itemNumber: 8,
    },
    {
      name: "Gaia's Vengeance Ghost",
      image: gaiasGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 9,
    },
    {
      name: "Mage Punk Ghost",
      image: mageGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 10,
    },
    {
      name: "Reaver Ghost",
      image: reaverGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 11,
    },
    {
      name: "Ruiniation Ghost",
      image: ruinGhost,
      cost: 2175,
      type: "Ghost",
      itemNumber: 12,
    },
    {
      name: "Chronovoid Sheriff",
      image: chronoSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 13,
    },
    {
      name: "Reaver Sheriff",
      image: reaverSheriff,
      cost: 1775,
      type: "Sheriff",
      itemNumber: 14,
    },
    {
      name: "Singularity Sheriff",
      image: singularitySheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 15,
    },
    {
      name: "Sentinels of Light Sheriff",
      image: solSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 16,
    },
  ];
  return (
    <div className="container">
      <Header cartSize={cart.length} cart={cart} />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home allItems={allItemArray} />} />
          <Route path="/home" element={<Home allItems={allItemArray} />} />
          <Route
            path="/shop"
            element={
              <BrowseShop
                cart={cart}
                setCart={setCart}
                allItemArray={allItemArray}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            }
          />
          <Route
            path="/product/:itemNumber"
            element={
              <ViewDetails
                cart={cart}
                setCart={setCart}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            }
          />
        </Routes>
      </HashRouter>
      <footer className="footer">
        {" "}
        All images belong to their respective owners, All Code is Original and
        Written by Josh Mathiak
      </footer>
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
