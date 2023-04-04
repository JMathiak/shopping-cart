import React, { Component } from "react";
import "../styles/ItemCard.css";

const ItemCard = ({
  name,
  image,
  price,
  type,
  products,
  itemNumber,
  cart,
  setCart,
}) => {
  const addToCart = () => {
    let item = products.find((x) => x.itemNumber === itemNumber);
    //let arr = cart.push(item);
    setCart([...cart, item]);
  };
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt="Oni Vandal"></img>
      <p>{type}</p>
      <p>{price}</p>
      <div>
        <button onClick={addToCart}> Add to Cart</button>
        <button> View Details </button>
      </div>
    </div>
  );
};

export default ItemCard;
