import React from "react";
import { useLocation } from "react-router-dom";
const ViewDetails = () => {
  const location = useLocation();
  const { name } = location.state;
  const { price } = location.state;
  const { type } = location.state;
  const { image } = location.state;
  return (
    <div>
      {name}, {price} VP, {type}
      <img src={image} alt="Gun"></img>
    </div>
  );
};

export default ViewDetails;
