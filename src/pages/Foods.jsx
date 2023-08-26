import React from 'react'

import "./../styles/Foods.css";

import images from '../constants/images';

const Foods = () => {
  return (
    <>
      <section className="section">
        <div className="food__container container grid">
          <div className="food__actions-bar">
            <div className="food__actions-data">
              <h4 className="food__actions-subtitle">What we serve</h4>
              <h2 className="food__actions-title">Find the best foods</h2>
            </div>

            <a href="#" className="food__actions-cart">
              <i class="ri-handbag-line"></i>
            </a>
          </div>

          <div className="food__menu-options">
            <div className="food__menu-content">
              <div className="food__menu-topbar">
                <h4 className="food__menu-title">Special Discount Today</h4>

                <h5 className="food__menu-link">View All</h5>
              </div>

              <div className="food__menu-cards">
                <article className="food__menu-card">
                  <img src={images.dicountImage1} alt="" />

                  <div>
                    <h5 className="food__card-name">Tomato With Tofu Salad</h5>
                    <div className="food__card-content">
                      <h5 className="food__card-review"><i class="ri-star-s-fill"></i>4,6<span>(10.6k Review)</span></h5>

                      <div className="food__card-discount">
                        <div className="food__card-percent">
                          15%
                        </div>

                        <h5 className="food__card-priceold">12.65</h5>
                      </div>
                    </div>
                  </div>

                  <div className="card__bottom-actions">
                    <h5 className="card__price">$12.90</h5>

                    <button className="button card-button">
                      Order
                    </button>
                  </div>

                </article>
              </div>
            </div>

            <div className="food__menu-content">
              <div className="food__menu-topbar">
                <h4 className="food__menu-title">Select menu of the day</h4>
              </div>

              <div className="food__menu-cards">
                <article className="food__menu-card">
                  <img src={images.dicountImage1} alt="" />

                  <div>
                    <h5 className="food__card-name">Tomato With Tofu Salad</h5>
                    <div className="food__card-content">
                      <h5 className="food__card-review"><i class="ri-star-s-fill"></i>4,6<span>(10.6k Review)</span></h5>
                    </div>
                  </div>

                  <div className="card__bottom-actions">
                    <h5 className="card__price">$12.90</h5>

                    <button className="button card-button">
                      Order
                    </button>
                  </div>

                </article>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="food__container-category container grid">
          <div className="food__category">
            <h3 className="food__category-title">Category</h3>

            <div className="food__category-content">
                <div className="food__category-options">
                  <div className="food__category-circle">
                      <img src={images.logo} alt="" />
                  </div>
                  <h3 className="food__category-name">All</h3>
                </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </section>
    </>

  )
}

export default Foods