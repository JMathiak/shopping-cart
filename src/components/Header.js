import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="link-holder">
        <div
          className="link"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="link"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browse Shop
        </div>
        <div
          className="link"
          onClick={() => {
            navigate("/cart");
          }}
        >
          View Cart
        </div>
      </div>
      <div>{props.cartSize}</div>
    </div>
  );
}

export default Header;
