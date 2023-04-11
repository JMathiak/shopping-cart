import React, { Component } from "react";
import "../styles/CartItemCard.css";
const CartItemCard = ({ name, img, cost, type, quantity }) => {
  return (
    <div className="cart-item-card">
      <img src={img} alt={name}></img>
      <div className="item-info">
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {quantity} x {cost} VP
        </p>
      </div>
      <div className="item-cost">{quantity * cost} VP</div>
    </div>
  );
};

export default CartItemCard;
