import React, { useState } from "react";
import "../styles/ItemCard.css";

const ItemCard = ({
  name,
  image,
  price,
  type,
  products,
  itemNumber,
  cart,
  setCart,
  allItems,
}) => {
  const [quant, setQuant] = useState(1);

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
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt="Oni Vandal"></img>
      <p>{type}</p>
      <p>{price} VP</p>
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        max="5"
        value={quant}
        onChange={(e) => {
          setQuant(e.target.value);
        }}
      ></input>
      <div>
        <button onClick={addToCart}> Add to Cart</button>
        <button> View Details </button>
      </div>
    </div>
  );
};

export default ItemCard;
