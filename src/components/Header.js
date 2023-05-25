import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="website-title">Shua's Valorant Gallery</h1>
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
