import React, { Component } from "react";
import "../styles/CartItemCard.css";
const CartItemCard = ({ name, img, cost, type }) => {
  return (
    <div className="cart-item-card">
      <img src={img} alt={name}></img>
      <div className="item-info">
        <p>{name}</p>
        <p>{type}</p>
      </div>
      <div className="item-cost"> 1 x {cost}</div>
    </div>
  );
};

export default CartItemCard;
