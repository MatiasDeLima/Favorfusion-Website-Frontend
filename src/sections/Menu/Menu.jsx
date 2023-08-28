import React from "react";

import images from '../../constants/images'

import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu section">
      <h3 className="section__subtitle">OUR MENU</h3>
      <h2 className="section__title">
        Menu That Always <br />
        Make you fall in love
      </h2>

      <img src={images.geometric2} alt="" className="menu__geometric-2" />

      <div className="menu__container container grid">
        <div className="menu__slider">
          <article className="menu__card">
            <img
              src={images.menuimage1}
              alt="menu image"
              className="card__image"
            />
            <div className="menu__card-bg"></div>

            <div className="menu__card-data">
              <div>
                <h3 className="menu__card-title">Italian Pizza</h3>

                <p className="menu__card-price">
                  <span>$</span>9.65
                </p>
              </div>

              <a href="#" className="menu__card-button">
                Order Now <i class="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </article>

          <article className="menu__card">
            <img
              src={images.menuimage2}
              alt="menu image"
              className="card__image"
            />
            <div className="menu__card-bg"></div>

            <div className="menu__card-data">
              <div>
                <h3 className="menu__card-title">Italian Pizza</h3>

                <p className="menu__card-price">
                  <span>$</span>9.65
                </p>
              </div>

              <a href="#" className="menu__card-button">
                Order Now <i class="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </article>
        </div>

        <div className="menu__category">
          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon1} alt="" />
            </div>

            <h3 className="category__name">Burger</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon2} alt="" />
            </div>

            <h3 className="category__name">Pizza</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon3} alt="" />
            </div>

            <h3 className="category__name">Cupcake</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon4} alt="" />
            </div>

            <h3 className="category__name">Ramen</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>

          <div className="category__content">
            <div className="category__image">
              <img src={images.menuicon5} alt="" />
            </div>

            <h3 className="category__name">Ice Cream</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
