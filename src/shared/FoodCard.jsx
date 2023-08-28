import React from "react";
import { Link } from "react-router-dom";
import "./food-card.css";

import calculateAvgRating from "../utils/avgRating";

const FoodCard = ({ food }) => {
  const { id, title, photo, price, oldPrice, reviews, discount, featured } =
    food;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <article class="food__card">
      <div className="food__image">
        <img src={photo} alt="" />
        {featured && <span>Featured</span>}
      </div>

      <div class="food__card-data">
        <h4 class="food__card-name">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h4>

        <h4 class="food__card-review">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
        </h4>
      </div>

      <div class="food__card-info">
        <div class="food__card-taxe">{discount}</div>

        <h4 class="food__price-old">${oldPrice}</h4>
      </div>

      <div class="food__card-bottom">
        <h3 class="food__card-price">${price}</h3>

        <button class="button food__card-button">
          <i class="ri-shopping-bag-line"></i>
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
