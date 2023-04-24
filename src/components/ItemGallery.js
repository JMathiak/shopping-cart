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
  allItems,
  displayArr,
}) => {
  return (
    <div className="item-gallery">
      {displayArr.map((item) => (
        <ItemCard
          name={item.name}
          image={item.image}
          price={item.cost}
          type={item.type}
          itemNumber={item.itemNumber}
          products={vandals}
          cart={cart}
          setCart={setCart}
          allItems={allItems}
          key={item.itemNumber}
        />
      ))}
    </div>
  );
};

export default ItemGallery;
