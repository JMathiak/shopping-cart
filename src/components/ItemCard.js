import React, { Component } from "react";
import "../styles/ItemCard.css";

const ItemCard = ({ name, image, price, type }) => {
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt="Oni Vandal"></img>
      <p>{type}</p>
      <p>{price}</p>
      <div>
        <button> Add to Cart</button>
        <button> View Details </button>
      </div>
    </div>
  );
};

export default ItemCard;
