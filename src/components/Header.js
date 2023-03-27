import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
function Header(props) {
  const navigate = useNavigate();
  return (
    <nav className="header">
      <ul className="link-holder">
        <li
          className="link"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="link"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browse Shop
        </li>
        <li
          className="link"
          onClick={() => {
            navigate("/cart");
          }}
        >
          View Cart
        </li>

        <li>{props.cartSize}</li>
      </ul>
    </nav>
  );
}

export default Header;
