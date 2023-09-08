import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import ItemCard from "./ItemCard";
import featuredImage from "../images/featured-skins.jpg";
const Home = ({ allItems }) => {
  const [dealArray, setDealArray] = useState([]);

  const getDailyDeal = () => {
    const interArray = [...allItems];
    const shuffled = interArray.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    setDealArray(selected);
  };

  useEffect(() => {
    getDailyDeal();
  }, []);

  return (
    <main className="home-container">
      <div className="featured-image">
        <img className="featImage" src={featuredImage} alt="" />
      </div>
      <h2 className="featured-label">Featured Items</h2>
      <section className="featured-items">
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
      </section>
    </main>
  );
};

export default Home;
