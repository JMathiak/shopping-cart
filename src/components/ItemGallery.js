import React from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemGallery.css";
const ItemGallery = ({ cart, setCart, allItems, displayArr }) => {
  return (
    <section className="item-gallery">
      {displayArr.map((item) => (
        <ItemCard
          name={item.name}
          image={item.image}
          price={item.cost}
          type={item.type}
          itemNumber={item.itemNumber}
          cart={cart}
          setCart={setCart}
          allItems={allItems}
          key={item.itemNumber}
        />
      ))}
    </section>
  );
};

export default ItemGallery;

/* 
To do: Get rid of select dropdowns for filtering. 
Make it a clickable menu to the left of the items
*/
