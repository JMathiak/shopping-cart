import React, { useState } from "react";
import "../styles/ItemCard.css";
import { Link, useNavigate } from "react-router-dom";

const ItemCard = ({
  name,
  image,
  price,
  type,
  itemNumber,
  cart,
  setCart,
  allItems,
}) => {
  const [quant, setQuant] = useState(1);
  const navigate = useNavigate();
  let quantMIN = 1;
  let quantMAX = 5;
  const addToCart = () => {
    if (cart.filter((x) => x.itemNumber === itemNumber).length > 0) {
      let workingArr = [...cart];
      let index = workingArr.findIndex((e) => e.itemNumber === itemNumber);
      let itemQuant = parseInt(workingArr[index].quantity) + parseInt(quant);
      workingArr[index].quantity = itemQuant;
      setCart(workingArr);
    } else {
      let item = allItems.find((x) => x.itemNumber === itemNumber);
      let arrItem = {
        name: item.name,
        image: item.image,
        cost: item.cost,
        type: item.type,
        itemNumber: item.itemNumber,
        quantity: quant,
      };
      setCart([...cart, arrItem]);
    }

    setQuant(1);
  };

  const cardClick = () => {
    navigate(`/product/${itemNumber}`, {
      state: {
        name: name,
        price: price,
        type: type,
        image: image,
        itemNumber: itemNumber,
        allItems: allItems,
      },
    });
  };
  return (
    <section className="item-card" onClick={cardClick}>
      <div className="item-card-image">
        <img src={image} alt="Oni Vandal"></img>
      </div>
      <h2 className="item-card-name">{name}</h2>
      <p className="item-card-price">{price} VP</p>
    </section>
  );
};

export default ItemCard;
