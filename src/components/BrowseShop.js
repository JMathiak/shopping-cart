import React, { useState } from "react";
import "../styles/BrowseShop.css";
import ItemGallery from "./ItemGallery";

const BrowseShop = ({ cart, setCart, allItemArray }) => {
  const [displayArr, setDisplayArr] = useState([...allItemArray]);
  const [sorting, setSorting] = useState("All Items");
  const filterItems = (sort) => {
    let filteredArr = [];
    switch (sort) {
      default:
        setDisplayArr(allItemArray);
        setSorting("All Items");
        break;
      case "all":
        setDisplayArr(allItemArray);
        setSorting("All Items");
        break;
      case "vandals":
        filteredArr = [...allItemArray].filter((x) => x.type === "Vandal");
        setDisplayArr(filteredArr);
        setSorting("Vandals");
        break;
      case "phantoms":
        filteredArr = [...allItemArray].filter((x) => x.type === "Phantom");
        setDisplayArr(filteredArr);
        setSorting("Phantoms");
        break;
      case "sheriffs":
        filteredArr = [...allItemArray].filter((x) => x.type === "Sheriff");
        setDisplayArr(filteredArr);
        setSorting("Sheriffs");
        break;
      case "ghosts":
        filteredArr = [...allItemArray].filter((x) => x.type === "Ghost");
        setDisplayArr(filteredArr);
        setSorting("Ghosts");
        break;
    }
  };

  return (
    <main className="shop-area">
      <aside className="shop-sidebar">
        <h2 className="sort-header">
          Shop / <br /> {sorting}
        </h2>
        <ul className="shop-filter-options">
          <li
            onClick={() => {
              filterItems("all");
            }}
          >
            All Items
          </li>
          <li
            onClick={() => {
              filterItems("vandals");
            }}
          >
            Vandals
          </li>
          <li
            onClick={() => {
              filterItems("phantoms");
            }}
          >
            Phantoms
          </li>
          <li
            onClick={() => {
              filterItems("ghosts");
            }}
          >
            Ghosts
          </li>
          <li
            onClick={() => {
              filterItems("sheriffs");
            }}
          >
            Sheriffs
          </li>
        </ul>
      </aside>
      <ItemGallery
        filterItems={filterItems}
        allItems={allItemArray}
        displayArr={displayArr}
        cart={cart}
        setCart={setCart}
      />
    </main>
  );
};

export default BrowseShop;
