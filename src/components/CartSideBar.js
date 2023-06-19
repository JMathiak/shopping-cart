import React, { useEffect, useRef } from "react";
import "../styles/CartSideBar.css";
const CartSideBar = ({ cart, cartHovered, setCartHovered }) => {
  return <div className="sidebar">{cart.map((item) => item.name)}</div>;
};

export default CartSideBar;
