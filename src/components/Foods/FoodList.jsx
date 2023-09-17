import React from "react";

import FoodCard from "../../shared/FoodCard";
import foods from "../../assets/data/foods.js";

import "./foodList.css";

const FoodList = () => {
  return (
    <>
      {foods?.map(food => (
        <div key={food.id}>
          <FoodCard food={food}/>
        </div>
      ))}
    </>
  );
};

export default FoodList;
