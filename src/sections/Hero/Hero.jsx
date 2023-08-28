import React from "react";

import "./Hero.css";

import images from '../../constants/images'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero__container container grid">
        <div className="hero__data">
          <div className="data__top">
            <div className="hero__subtitle">
              More than Faster{" "}
              <img
                src={images.homeicon}
                alt=""
                className="hero__subtitle-icon"
              />
            </div>

            <h1 className="hero__title">
              Be The Fastest <br />
              In Delivering <br />
              Your <span>Food</span>
            </h1>

            <p className="hero__description">
              Our job is to filling your tummy with delicious food and with fast
              free delivery.
            </p>

            <div className="hero__buttons">
              <div>
                <button className="button">Get Started</button>

                <div className="button__shadow"></div>
              </div>

              <button className="hero__button-video">
                <div className="button__video">
                  <i class="ri-play-fill"></i>
                </div>
                Watch Vídeo
              </button>
            </div>
          </div>

          <div className="data__bottom">
            <div className="data__bottom-top">
              <img src={images.review1} alt="" className="review__image" />
              <img src={images.review2} alt="" className="review__image" />
              <img src={images.review3} alt="" className="review__image" />
            </div>

            <div className="data__bottom-bottom">
              <h3>Our Happy Customer</h3>

              <div className="data__bottom-review">
                <i class="ri-star-s-fill"></i> <span>4.6</span>(10.6k Reviews)
              </div>
            </div>
          </div>
        </div>

        <div className="hero__image">
          <img src={images.grafios1} alt="" className="hero__grafio-1" />
          <img src={images.grafios2} alt="" className="hero__grafio-2" />
          <img src={images.circle1} alt="" className="hero__circle-2" />
          <img src={images.geometric1} alt="" className="hero__geometric-1" />
          <img src={images.geometric1} alt="" className="hero__geometric-2" />

          <div className="image__data">
            <div className="content__left">
              <div className="image__data-left">
                <img src={images.homeFace} alt="home face" />
              </div>

              <div className="image__data-mid">
                <h3 className="image__data-title">Lucas Matias</h3>

                <span>Food Courier</span>
              </div>
            </div>

            <div className="image__data-icon">
              <i class="ri-phone-fill"></i>
            </div>
          </div>

          <div className="image__data-2">
            <div className="pizza__image">
              <img src={images.homepizza} alt="home pizza" />
            </div>

            <div className="pizza__data">
              <div>
                <h3 className="pizza__title">Brazilian Pizza</h3>

                <div className="pizza__review">
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-line"></i>
                </div>
              </div>

              <p className="pizza__price">
                <span>$</span>9.65
              </p>
            </div>
          </div>

          <img src={images.homeimage} alt="home image" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
