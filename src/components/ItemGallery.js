import React, { Component } from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemGallery.css";
const ItemGallery = ({ itemArray }) => {
  return (
    <div className="item-gallery">
      {itemArray.map((item) => (
        <ItemCard
          name={item.name}
          image={item.image}
          price={item.cost}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default ItemGallery;
