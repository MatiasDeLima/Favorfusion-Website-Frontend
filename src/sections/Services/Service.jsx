import React from "react";

import images from "../../assets/index.js";

import "./Service.css";

const Service = () => {
  return (
    <section className="services section">
      <h3 className="section__subtitle">WHAT WE SERVE</h3>
      <h2 className="section__title">
        Your Favourite Food
        <br />
        Delivery Partner
      </h2>

      <img src={images.geometric1} alt="" className="services__geometric-1" />
      <img src={images.geometric2} alt="" className="services__geometric-2" />
      <img src={images.circle2} alt="" className="services__circle-2" />

      <div className="services__container container grid">
        <article className="service__card">
          <img
            src={images.serviceImg1}
            alt="service image"
            className="service__card-img"
          />

          <h3 className="service__card-title">Easy To Order</h3>

          <p className="service__card-description">
            Our job is to filling your tummy with delicious food
          </p>
        </article>

        <article className="service__card">
          <img
            src={images.serviceImg2}
            alt="service image"
            className="service__card-img"
          />

          <h3 className="service__card-title">Fastest Delivery</h3>

          <p className="service__card-description">
            Our job is to filling your tummy with delicious food
          </p>
        </article>

        <article className="service__card">
          <img
            src={images.serviceImg3}
            alt="service image"
            className="service__card-img"
          />

          <h3 className="service__card-title">Best Quality</h3>

          <p className="service__card-description">
            Our job is to filling your tummy with delicious food
          </p>
        </article>
      </div>
    </section>
  );
};

export default Service;
