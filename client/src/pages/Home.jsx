import React from "react";

import images from '../constants/images'

import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <section className="hero section">
        <div className="hero__container container grid">
          <div className="hero__data">
            <div className="data__top">
              <div className="hero__subtitle">
                More than Faster <img src={images.homeicon} alt="" className="hero__subtitle-icon" />
              </div>

              <h1 className="hero__title">
                Be The Fastest <br />
                In Delivering <br />
                Your <span>Food</span>
              </h1>

              <p className="hero__description">
                Our job is to filling your tummy with delicious food
                and with fast free delivery.
              </p>

              <div className="hero__buttons">
                <div>
                  <button className='button'>
                    Get Started
                  </button>

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
              <div className='data__bottom-top'>
                <img src={images.review1} alt="" className="review__image" />
                <img src={images.review2} alt="" className="review__image" />
                <img src={images.review3} alt="" className="review__image" />
              </div>

              <div className='data__bottom-bottom'>
                <h3>Our Happy Customer</h3>

                <div className='data__bottom-review'>
                  <i class="ri-star-s-fill"></i> <span>4.6</span>(10.6k Reviews)
                </div>
              </div>
            </div>

          </div>

          <div className="hero__image">
            <img src={images.grafios1} alt="" className='hero__grafio-1' />
            <img src={images.grafios2} alt="" className='hero__grafio-2' />

            <div className="image__data">
              <div className="content__left">
                <div className="image__data-left">

                </div>

                <div className="image__data-mid">
                  <h3 className="image__data-title">
                    Lucas Matias
                  </h3>

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

            <img src={images.homeimage} alt="home image" />
          </div>
        </div>
      </section>


      <section className="services section">
        <h3 className="section__subtitle">WHAT WE SERVE</h3>
        <h2 className="section__title">Your Favourite Food<br />Delivery Partner</h2>

        <div className="services__container container grid">
          <article className="service__card">
            <img src={images.service1} alt="service image" className="service__card-img" />

            <h3 className="service__card-title">
              Easy To Order
            </h3>

            <p className="service__card-description">
              Our job is to filling your
              tummy with delicious food
            </p>
          </article>

          <article className="service__card">
            <img src={images.service2} alt="service image" className="service__card-img" />

            <h3 className="service__card-title">
              Fastest Delivery
            </h3>

            <p className="service__card-description">
              Our job is to filling your
              tummy with delicious food
            </p>
          </article>

          <article className="service__card">
            <img src={images.service3} alt="service image" className="service__card-img" />

            <h3 className="service__card-title">
              Best Quality
            </h3>

            <p className="service__card-description">
              Our job is to filling your
              tummy with delicious food
            </p>
          </article>
        </div>

      </section>


      <section className="menu section">
        <h3 className="section__subtitle">OUR MENU</h3>
        <h2 className="section__title">Menu That Always <br />Make you fall in love</h2>

        <div className="menu__container container grid">
          <div className="menu__slider">
            <article className="menu__card">
              <img src={images.menuimage1} alt="menu image" className="card__image" />
              <div className="menu__card-bg"></div>

              <div className="menu__card-data">
                <div>
                  <h3 className="menu__card-title">
                    Italian Pizza
                  </h3>

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
              <img src={images.menuimage2} alt="menu image" className="card__image" />
              <div className="menu__card-bg"></div>

              <div className="menu__card-data">
                <div>
                  <h3 className="menu__card-title">
                    Italian Pizza
                  </h3>

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


      <section className='about section'>
        <div className="about__container container grid">
          <div className="about__data">
            <h3 className="about__subtitle">
              what they say
            </h3>

            <h2 className="about__title">
              What Our Customer <br />
              Say About us
            </h2>

            <p className="about__description">
              “FastFood is the best. Besides the many and delicious meals,
              the service is also very good, especially in the very fast delivery.
              I highly recommend FastFood to you.”
            </p>

            <div className="about__user-content">
              <div className="about__review-div">
                <img src={images.review1} alt="" className="about__review-image" />

                <div className="about__review-data">
                  <h3 className="about__review-title">
                    Theresa Jordan
                  </h3>

                  <span className="about__review-description">Food Enthusiast</span>
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
            <img src={images.aboutImage} alt="about image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;