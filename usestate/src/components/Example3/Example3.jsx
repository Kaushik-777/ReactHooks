import React from "react";
import { useState } from "react";

const Example3 = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    color: "red",
    year: "2023",
  });
  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  return (
    <div>
      <h2>My {car.brand}</h2>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};

export default Example3;
