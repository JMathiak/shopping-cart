import React from "react";
import { useLocation } from "react-router-dom";
const ViewDetails = () => {
  const location = useLocation();
  const { name } = location.state;
  const { price } = location.state;
  const { type } = location.state;
  return (
    <div>
      {name}, {price} VP, {type}
    </div>
  );
};

export default ViewDetails;
