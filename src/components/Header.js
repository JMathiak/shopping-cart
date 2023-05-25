import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Header.css";
function Header(props) {
  const navigate = useNavigate();
  return (
    <nav className="header">
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
            Browse Shop
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
            View Cart
          </Link>
        </li>

        <li>{props.cartSize}</li>
      </ul>
    </nav>
  );
}

/*
Icons for home, browse, cart
Badge on cart if item count > 0


*/
export default Header;
