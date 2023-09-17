import React from "react";

import images from "../../assets/index.js";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about section">
      <div className="about__container container grid">
        <div className="about__data">
          <h3 className="about__subtitle">what they say</h3>

          <h2 className="about__title">
            What Our Customer <br />
            Say About us
          </h2>

          <p className="about__description">
            “FastFood is the best. Besides the many and delicious meals, the
            service is also very good, especially in the very fast delivery. I
            highly recommend FastFood to you.”
          </p>

          <div className="about__user-content">
            <div className="about__review-div">
              <img
                src={images.heroReview1}
                alt=""
                className="about__review-image"
              />

              <div className="about__review-data">
                <h3 className="about__review-title">Theresa Jordan</h3>

                <span className="about__review-description">
                  Food Enthusiast
                </span>
              </div>
            </div>

            <div className="about__review">
              <div className="about__stars">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-line"></i>
              </div>
              <span>4,8</span>
            </div>
          </div>
        </div>

        <div className="about__image">
          <img src={images.geometric2} alt="" className="about__geometric-2" />
          <img src={images.geometric1} alt="" className="about__geometric-1" />
          <img src={images.circle1} alt="" className="about__circle-1" />

          <img src={images.aboutImg} alt="about image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
