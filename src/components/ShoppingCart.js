import React, { useState } from "react";
import CartItemCard from "./CartItemCard";
import "../styles/CartGallery.css";
const ShoppingCart = ({ cart, setCart, cartTotal, setCartTotal }) => {
  const emptyCart = () => {
    let emptycrt = [];
    setCart(emptycrt);
    setCartTotal(0);
  };
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
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        ))
      ) : (
        <div>No Items Currently in Cart</div>
      )}
      {cart.length > 0 && (
        <div>
          Total Cost: {cartTotal}VP{" "}
          <button onClick={emptyCart}>Empty Cart</button>{" "}
          <button>Check Out</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
