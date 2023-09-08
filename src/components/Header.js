import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import CartSideBar from "./CartSideBar";
import { hover } from "@testing-library/user-event/dist/hover";
function Header(props) {
  const navigate = useNavigate();

  const hovered = () => {
    props.setCartHovered(true);
  };
  return (
    <header className="header">
      <div className="website-title">
        <h1>Shua's Valorant Store</h1>
      </div>
      <nav>
        <ul className="link-holder">
          <li>
            <Link
              className="link"
              to="home"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="shop"
              onClick={(e) => {
                e.preventDefault();
                navigate("/shop");
              }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="cart"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              {props.cartSize}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/*
Icons for home, browse, cart
Badge on cart if item count > 0


*/
export default Header;
