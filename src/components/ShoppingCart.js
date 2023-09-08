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
    <main className="cart-gallery">
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
        <div className="empty-cart">No Items Currently in Cart</div>
      )}
      {cart.length > 0 && (
        <div className="cost-check-out">
          <p>Total Cost: {cartTotal}VP</p>
          <div className="cart-buttons">
            <button className="check-out-button">Check Out</button>
            <button className="empty-cart-button" onClick={emptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ShoppingCart;
