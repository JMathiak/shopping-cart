import React, { Component } from "react";
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

const BrowseShop = () => {
  const vandalItemArray = [
    {
      name: "Oni Vandal",
      image: oniVandal,
      cost: "1775 VP",
      type: "Vandal",
    },
    {
      name: "RGX 11z Pro Vandal",
      image: rgxVandal,
      cost: "2175 VP",
      type: "Vandal",
    },
    {
      name: "Gaia's Vengeance Vandal",
      image: gaiasVandal,
      cost: "1775 VP",
      type: "Vandal",
    },
    {
      name: "Araxys Vandal",
      image: araxysVandal,
      cost: "2175 VP",
      type: "Vandal",
    },
  ];

  const phantomItemArray = [
    {
      name: "Oni Phantom",
      image: oniPhantom,
      cost: "1775 VP",
      type: "Phantom",
    },
    {
      name: "Chronovoid Phantom",
      image: chronoPhantom,
      cost: "2175 VP",
      type: "Phantom",
    },
    {
      name: "Recon Phantom",
      image: reconPhantom,
      cost: "1775 VP",
      type: "Phantom",
    },
    {
      name: "Spectrum Phantom",
      image: spectrumPhantom,
      cost: "2675 VP",
      type: "Phantom",
    },
  ];

  const ghostItemArray = [
    {
      name: "Gaia's Vengeance Ghost",
      image: gaiasGhost,
      cost: "1775 VP",
      type: "Ghost",
    },
    {
      name: "Mage Punk Ghost",
      image: mageGhost,
      cost: "1775 VP",
      type: "Ghost",
    },
    {
      name: "Reaver Ghost",
      image: reaverGhost,
      cost: "1775 VP",
      type: "Ghost",
    },
    {
      name: "Ruiniation Ghost",
      image: ruinGhost,
      cost: "2175 VP",
      type: "Ghost",
    },
  ];

  const sheriffItemArray = [
    {
      name: "Chronovoid Sheriff",
      image: chronoSheriff,
      cost: "2175 VP",
      type: "Sheriff",
    },
    {
      name: "Reaver Sheriff",
      image: reaverSheriff,
      cost: "1775 VP",
      type: "Sheriff",
    },
    {
      name: "Singularity Sheriff",
      image: singularitySheriff,
      cost: "2175 VP",
      type: "Sheriff",
    },
    {
      name: "Sentinels of Light Sheriff",
      image: solSheriff,
      cost: "2175 VP",
      type: "Sheriff",
    },
  ];
  return (
    <div className="shop-area">
      <ItemGallery
        vandals={vandalItemArray}
        phantoms={phantomItemArray}
        ghosts={ghostItemArray}
        sheriffs={sheriffItemArray}
      />
    </div>
  );
};

export default BrowseShop;
