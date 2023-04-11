import React, { Component } from "react";
import CartItemCard from "./CartItemCard";
import "../styles/CartGallery.css";
const ShoppingCart = ({ cart }) => {
  return (
    <div className="cart-gallery">
      {cart.map((item) => (
        <CartItemCard
          name={item.name}
          img={item.image}
          cost={item.cost}
          type={item.type}
          quantity={item.quantity}
          key={item.itemNumber}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
