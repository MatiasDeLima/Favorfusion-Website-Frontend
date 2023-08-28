import React from "react";

import FoodCard from "../../shared/FoodCard";
import foods from "../../constants/data/foods";

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
