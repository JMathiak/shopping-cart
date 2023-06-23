import React, { Component } from "react";
import "../styles/CartItemCard.css";
const CartItemCard = ({
  name,
  img,
  cost,
  type,
  quantity,
  cart,
  setCart,
  key,
  cartTotal,
  setCartTotal,
}) => {
  const removeItem = () => {
    const holderCart = [...cart];
    const index = holderCart.findIndex((item) => item.itemNumber === key);
    holderCart.splice(index, 1);
    let newCartTotal = cartTotal - cost;
    setCart([...holderCart]);
    setCartTotal(newCartTotal);
  };
  return (
    <div className="cart-item-card">
      <img src={img} alt={name}></img>
      <div className="item-info">
        <p>{name}</p>
        <p>1 x {cost} VP</p>
      </div>
      <div className="item-cost">{1 * cost} VP</div>
      <div className="delete-item" onClick={removeItem}>
        X
      </div>
    </div>
  );
};

export default CartItemCard;
