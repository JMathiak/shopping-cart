import React, { Component } from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemGallery.css";
const ItemGallery = ({
  vandals,
  phantoms,
  ghosts,
  sheriffs,
  cart,
  setCart,
}) => {
  return (
    <div className="item-gallery">
      <div className="row">
        {vandals.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
            itemNumber={item.itemNumber}
            products={vandals}
            cart={cart}
            setCart={setCart}
            key={item.itemNumber}
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
            itemNumber={item.itemNumber}
            products={phantoms}
            cart={cart}
            setCart={setCart}
            key={item.itemNumber}
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
            itemNumber={item.itemNumber}
            products={ghosts}
            cart={cart}
            setCart={setCart}
            key={item.itemNumber}
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
            itemNumber={item.itemNumber}
            products={sheriffs}
            cart={cart}
            setCart={setCart}
            key={item.itemNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemGallery;
