import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ItemDetails.css";
const ViewDetails = ({ cart, setCart, cartTotal, setCartTotal }) => {
  const location = useLocation();
  console.log(location.state);
  const { name } = location.state;
  const { price } = location.state;
  const { type } = location.state;
  const { image } = location.state;
  const { allItems } = location.state;
  const { itemNumber } = location.state;
  const navigate = useNavigate();
  const addToCart = () => {
    if (cart.filter((x) => x.itemNumber === itemNumber).length > 0) {
      let workingArr = [...cart];
      let index = workingArr.findIndex((e) => e.itemNumber === itemNumber);
      // let itemQuant = parseInt(workingArr[index].quantity) + parseInt(quant);
      // workingArr[index].quantity = itemQuant;
      setCart(workingArr);
    } else {
      let item = allItems.find((x) => x.itemNumber === itemNumber);
      let arrItem = {
        name: item.name,
        image: item.image,
        cost: item.cost,
        type: item.type,
        itemNumber: item.itemNumber,
      };
      let newCartTotal = cartTotal + price;
      setCartTotal(newCartTotal);
      setCart([...cart, arrItem]);
    }

    // setQuant(1);
  };
  return (
    <div className="item-details">
      <div className="item-descriptors">
        <p>{name}</p>
        <p>{price} VP</p>
        <p>{type}</p>
        <button onClick={addToCart}>Add to Cart</button>
        <button
          onClick={() => {
            navigate(`/shop`);
          }}
        >
          Return To Shop
        </button>
      </div>
      <img className="item-image" src={image} alt="Gun"></img>
    </div>
  );
};

export default ViewDetails;
