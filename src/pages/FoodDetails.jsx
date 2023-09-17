import React from "react";

import images from "../assets/index.js";
import { useParams } from "react-router-dom";

import foods from "../assets/data/foods.js";

import CommonSection from "../shared/CommonSection.jsx"

import "../styles/Details.css";

const FoodDetails = () => {

  const {id} = useParams()

  // this is an static data later we will call our APi
  const food = foods.find(food => food.id === id)

  const {photo, title, desc, price, reviews, avgRating} = food
  
  return (
    <>

      <CommonSection title={"Food Details"}/>

      <section class="details section">
        <div class="details__container container grid">
            <div class="details__image">
                <img src={photo} alt="" />
            </div>

            <div class="details__content">
                <h3 class="details__title">{title}</h3>
                <h4 class="details__review">
                    <ul class="details__review-stars">
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                    </ul>

                    {avgRating} <span>({reviews.length} Review)</span>
                </h4>

                <h4 class="details__content-price">
                    {price}
                </h4>

                <p class="details__content-description">
                    {desc}
                </p>

                <button class="details__button">Add to cart</button>
            </div>

            <div class="details__tabs">
                <a href="#" class="tab__button">
                    Description
                </a>

                <a href="#" class="tab__button">
                    Review (2)
                </a>
            </div>
        </div>
    </section>
    </>
  );
};

export default FoodDetails;
