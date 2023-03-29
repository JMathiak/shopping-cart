import React, { Component } from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemGallery.css";
const ItemGallery = ({ vandals, phantoms, ghosts, sheriffs }) => {
  return (
    <div className="item-gallery">
      <div className="row">
        {vandals.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
          />
        ))}
      </div>
      <div className="row">
        {phantoms.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
          />
        ))}
      </div>
      <div className="row">
        {ghosts.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
          />
        ))}
      </div>
      <div className="row">
        {sheriffs.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemGallery;
