import React, { Component } from "react";
import ItemGallery from "./ItemGallery";
import oniVandal from "../images/OniVandal.jpg";
import rgxVandal from "../images/RGXVandal.jpg";
import gaiasVandal from "../images/GaiasVandal.jpg";
const BrowseShop = () => {
  const allItemArray = [
    {
      name: "Oni Vandal",
      image: oniVandal,
      cost: "1775 VP",
      type: "Vandal",
    },
    {
      name: "RGX 11z Pro Vandal",
      image: rgxVandal,
      cost: "2175 VP",
      type: "Vandal",
    },
    {
      name: "Gaia's Vengeance Vandal",
      image: gaiasVandal,
      cost: "1775 VP",
      type: "Vandal",
    },
  ];
  return (
    <div className="shop-area">
      <ItemGallery itemArray={allItemArray} />
    </div>
  );
};

export default BrowseShop;
