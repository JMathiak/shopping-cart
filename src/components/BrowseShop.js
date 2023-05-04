import React, { useEffect, useState } from "react";
import ItemGallery from "./ItemGallery";
import oniVandal from "../images/OniVandal.jpg";
import rgxVandal from "../images/RGXVandal.jpg";
import gaiasVandal from "../images/GaiasVandal.jpg";
import araxysVandal from "../images/AraxysVandal.jpg";
import chronoPhantom from "../images/chronoPhantom.jpg";
import oniPhantom from "../images/oniPhantom.jpg";
import reconPhantom from "../images/reconPhantom.jpg";
import spectrumPhantom from "../images/spectrumPhantom.jpg";
import chronoSheriff from "../images/chronoSheriff.jpg";
import reaverSheriff from "../images/reaverSheriff.jpg";
import solSheriff from "../images/solSheriff.jpg";
import singularitySheriff from "../images/singularitySheriff.jpg";
import gaiasGhost from "../images/gaiasGhost.jpg";
import mageGhost from "../images/mageGhost.jpg";
import reaverGhost from "../images/reaverGhost.jpg";
import ruinGhost from "../images/ruinGhost.jpg";

const BrowseShop = ({ cart, setCart }) => {
  //const [filter, setFilter] = useState("");
  //const [sortOption, setSortOption] = useState("");

  const vandalItemArray = [
    {
      name: "Oni Vandal",
      image: oniVandal,
      cost: 1775,
      type: "Vandal",
      itemNumber: 1,
    },
    {
      name: "RGX 11z Pro Vandal",
      image: rgxVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 2,
    },
    {
      name: "Gaia's Vengeance Vandal",
      image: gaiasVandal,
      cost: 1775,
      type: "Vandal",
      itemNumber: 3,
    },
    {
      name: "Araxys Vandal",
      image: araxysVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 4,
    },
  ];

  const phantomItemArray = [
    {
      name: "Oni Phantom",
      image: oniPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 5,
    },
    {
      name: "Chronovoid Phantom",
      image: chronoPhantom,
      cost: 2175,
      type: "Phantom",
      itemNumber: 6,
    },
    {
      name: "Recon Phantom",
      image: reconPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 7,
    },
    {
      name: "Spectrum Phantom",
      image: spectrumPhantom,
      cost: 2675,
      type: "Phantom",
      itemNumber: 8,
    },
  ];

  const ghostItemArray = [
    {
      name: "Gaia's Vengeance Ghost",
      image: gaiasGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 9,
    },
    {
      name: "Mage Punk Ghost",
      image: mageGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 10,
    },
    {
      name: "Reaver Ghost",
      image: reaverGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 11,
    },
    {
      name: "Ruiniation Ghost",
      image: ruinGhost,
      cost: 2175,
      type: "Ghost",
      itemNumber: 12,
    },
  ];

  const sheriffItemArray = [
    {
      name: "Chronovoid Sheriff",
      image: chronoSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 13,
    },
    {
      name: "Reaver Sheriff",
      image: reaverSheriff,
      cost: 1775,
      type: "Sheriff",
      itemNumber: 14,
    },
    {
      name: "Singularity Sheriff",
      image: singularitySheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 15,
    },
    {
      name: "Sentinels of Light Sheriff",
      image: solSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 16,
    },
  ];

  const allItemArray = [
    {
      name: "Oni Vandal",
      image: oniVandal,
      cost: 1775,
      type: "Vandal",
      itemNumber: 1,
    },
    {
      name: "RGX 11z Pro Vandal",
      image: rgxVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 2,
    },
    {
      name: "Gaia's Vengeance Vandal",
      image: gaiasVandal,
      cost: 1775,
      type: "Vandal",
      itemNumber: 3,
    },
    {
      name: "Araxys Vandal",
      image: araxysVandal,
      cost: 2175,
      type: "Vandal",
      itemNumber: 4,
    },
    {
      name: "Oni Phantom",
      image: oniPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 5,
    },
    {
      name: "Chronovoid Phantom",
      image: chronoPhantom,
      cost: 2175,
      type: "Phantom",
      itemNumber: 6,
    },
    {
      name: "Recon Phantom",
      image: reconPhantom,
      cost: 1775,
      type: "Phantom",
      itemNumber: 7,
    },
    {
      name: "Spectrum Phantom",
      image: spectrumPhantom,
      cost: 2675,
      type: "Phantom",
      itemNumber: 8,
    },
    {
      name: "Gaia's Vengeance Ghost",
      image: gaiasGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 9,
    },
    {
      name: "Mage Punk Ghost",
      image: mageGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 10,
    },
    {
      name: "Reaver Ghost",
      image: reaverGhost,
      cost: 1775,
      type: "Ghost",
      itemNumber: 11,
    },
    {
      name: "Ruiniation Ghost",
      image: ruinGhost,
      cost: 2175,
      type: "Ghost",
      itemNumber: 12,
    },
    {
      name: "Chronovoid Sheriff",
      image: chronoSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 13,
    },
    {
      name: "Reaver Sheriff",
      image: reaverSheriff,
      cost: 1775,
      type: "Sheriff",
      itemNumber: 14,
    },
    {
      name: "Singularity Sheriff",
      image: singularitySheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 15,
    },
    {
      name: "Sentinels of Light Sheriff",
      image: solSheriff,
      cost: 2175,
      type: "Sheriff",
      itemNumber: 16,
    },
  ];
  const [displayArr, setDisplayArr] = useState([...allItemArray]);
  const filterItems = (e) => {
    let filter = e.target.value;
    let filteredArr = [];
    switch (filter) {
      default:
        setDisplayArr(allItemArray);
        break;
      case "all":
        setDisplayArr(allItemArray);
        break;
      case "vandals":
        filteredArr = [...allItemArray].filter((x) => x.type === "Vandal");
        setDisplayArr(filteredArr);
        break;
      case "phantoms":
        filteredArr = [...allItemArray].filter((x) => x.type === "Phantom");
        setDisplayArr(filteredArr);
        break;
      case "sheriffs":
        filteredArr = [...allItemArray].filter((x) => x.type === "Sheriff");
        setDisplayArr(filteredArr);
        break;
      case "ghosts":
        filteredArr = [...allItemArray].filter((x) => x.type === "Ghost");
        setDisplayArr(filteredArr);
        break;
    }
  };

  const sortItems = (e) => {
    let sort = e.target.value;
    let filteredArr = [];
    switch (sort) {
      default:
        break;
      case "default":
        filteredArr = [...displayArr].sort((a, b) => {
          if (a.type === b.type) {
            return a.cost > b.cost ? 1 : -1;
          } else {
            return a.type > b.type ? 1 : -1;
          }
        });
        setDisplayArr(filteredArr);
        break;
      case "lowToHigh":
        filteredArr = [...displayArr].sort((a, b) => {
          if (a.cost === b.cost) {
            return a.name > b.name ? 1 : -1;
          } else {
            return a.cost > b.cost ? 1 : -1;
          }
        });
        setDisplayArr(filteredArr);
        break;
      case "highToLow":
        filteredArr = [...displayArr].sort((a, b) => {
          if (a.cost === b.cost) {
            return a.name > b.name ? 1 : -1;
          } else {
            return a.cost < b.cost ? 1 : -1;
          }
        });
        setDisplayArr(filteredArr);
        break;
      case "skinLine":
        filteredArr = [...displayArr].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        setDisplayArr(filteredArr);
        break;
    }
  };

  // useEffect(() => {
  //   if (filter === "vandals") {
  //     let filteredArr = [...displayArr].filter((x) => x.type === "Vandal");
  //     console.log(filteredArr);
  //     setDisplayArr(filteredArr);
  //   }
  // }, [displayArr, filter]);

  // useEffect(() => {
  //   if (sortOption === "priceLowToHigh") {
  //     setDisplayArr([...displayArr])
  //   }
  // }, [sortOption]);
  return (
    <div className="shop-area">
      <div>
        <label for="filter">Filter Items: </label>
        <select onChange={filterItems} name="filter" id="filter">
          <option value="all" selected>
            Show All
          </option>
          <option value="vandals">Vandals</option>
          <option value="phantoms">Phantoms</option>
          <option value="sheriffs">Sheriffs</option>
          <option value="ghosts">Ghosts</option>
        </select>
      </div>
      <div>
        <label for="sort">Sort Items: </label>
        <select onChange={sortItems} name="sort" id="sort">
          <option value="default" selected>
            By Gun Type
          </option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="skinLine">By Skin Line</option>
        </select>
      </div>
      <ItemGallery
        vandals={vandalItemArray}
        phantoms={phantomItemArray}
        ghosts={ghostItemArray}
        sheriffs={sheriffItemArray}
        allItems={allItemArray}
        displayArr={displayArr}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default BrowseShop;
