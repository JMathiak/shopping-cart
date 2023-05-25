import React, { useState } from "react";
import "../styles/ItemCard.css";
import { useNavigate, Link } from "react-router-dom";

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
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt="Oni Vandal"></img>

      <p>{price} VP</p>
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min={quantMIN}
        max={quantMAX}
        value={quant}
        onChange={(e) => {
          setQuant(e.target.value);
        }}
      ></input>
      <div className="item-card-buttons">
        <button onClick={addToCart}> Add to Cart</button>
        <Link
          className="item-card-link"
          to={`/product/${itemNumber}`}
          state={{ name: name, price: price, type: type, image: image }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
