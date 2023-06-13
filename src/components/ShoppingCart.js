import React, { Component } from "react";
import CartItemCard from "./CartItemCard";
import "../styles/CartGallery.css";
const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="cart-gallery">
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItemCard
            name={item.name}
            img={item.image}
            cost={item.cost}
            type={item.type}
            quantity={item.quantity}
            key={item.itemNumber}
            cart={cart}
            setCart={setCart}
          />
        ))
      ) : (
        <div>No Items Currently in Cart</div>
      )}
    </div>
  );
};

export default ShoppingCart;
