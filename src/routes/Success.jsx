import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Successful</h1>
    </div>
  );
};

export default Success;
