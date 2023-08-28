import React from "react";

import images from "./../constants/images.js";

import "../styles/Details.css";

const FoodDetails = () => {
  return (
    <>
      <section className="food__banner section">
        <img src={images.foodBanner} alt="" />
        <div className="food__banner-bg"></div>
        <h2 className="food__banner-title">Tomato Whit Tofu Salad</h2>
      </section>

      <section className="details section">
        <div className="details__container container">
          <div className="details__image">
            <img src={images.dicountImage1} alt="" />
          </div>

          <div className="details__info">
            <h3 className="details__info-name">Tomato With Tofu Salad</h3>

            <div className="details__info-review">
              <ul className="details__info-stars">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
              </ul>

              <h3 className="details__review">
                4,5 <span>(2k Review)</span>
              </h3>
            </div>

            <h3 className="details__price">$12.65</h3>

            <p className="details__description">
              A Spanish dish originating from Valencia, paella is a rice-based
              dish cooked with saffron-infused broth and usually includes a
              combination of ingredients like chicken, rabbit, seafood, and
              vegetables.
            </p>

            <button className="button">Add to cart</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="top__actions">
            <a href="" className="food__description">
              Description
            </a>

            <a href="" className="food__description">
              Review <span>(2)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodDetails;
