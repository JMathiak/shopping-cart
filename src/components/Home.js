import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import ItemCard from "./ItemCard";
const Home = ({ allItems }) => {
  const [dealArray, setDealArray] = useState([]);

  const getDailyDeal = () => {
    const shuffled = allItems.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    setDealArray(selected);
  };

  useEffect(() => {
    getDailyDeal();
  }, []);

  return (
    <div className="home-container">
      <h2 className="featured-label">Featured Items</h2>
      <div className="featured-items">
        {dealArray.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            price={item.cost}
            type={item.type}
            itemNumber={item.itemNumber}
            allItems={allItems}
            key={item.itemNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
