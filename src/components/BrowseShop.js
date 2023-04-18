import React, { useState } from "react";
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
  const [filter, setFilter] = useState("vandals");

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
  const filterItems = () => {
    if (filter === "vandals") {
      let filteredArr = allItemArray.filter((x) => x.type === "Vandal");
      console.log(filteredArr);
      setDisplayArr(filteredArr);
    }
  };

  return (
    <div className="shop-area">
      <button onClick={filterItems}>Filter</button>
      <ItemGallery
        vandals={vandalItemArray}
        phantoms={phantomItemArray}
        ghosts={ghostItemArray}
        sheriffs={sheriffItemArray}
        allItems={displayArr}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default BrowseShop;
