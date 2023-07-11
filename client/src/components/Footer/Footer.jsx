import React from 'react'
import images from '../../constants/images'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" class="nav__logo">
            <img src={images.logo} alt="" className="logo__icon" />
            FastFood
          </a>

          <p class="footer__description">
            Our job is to filling your tummy
            with delicious food and with fast
            and free delivery.
          </p>

          <div class="footer__social">
            <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">

            </a>
            <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">

            </a>
            <a href="https://twitter.com/" target="_blank" class="footer__social-link">

            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 class="footer__title">About</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">About Us</a>
            </li>
            <li>
              <a href="#" class="footer__link">Features</a>
            </li>
            <li>
              <a href="#" class="footer__link">News</a>
            </li>
            <li>
              <a href="#" class="footer__link">Menu</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 class="footer__title">Company</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">Why FastFood?</a>
            </li>
            <li>
              <a href="#" class="footer__link">Partiner With us</a>
            </li>
            <li>
              <a href="#" class="footer__link">FAQ</a>
            </li>
            <li>
              <a href="#" class="footer__link">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 class="footer__title">Support</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">Support Center</a>
            </li>
            <li>
              <a href="#" class="footer__link">Feedback</a>
            </li>
            <li>
              <a href="#" class="footer__link">Contact Us</a>
            </li>
            <li>
              <a href="#" class="footer__link">Accesbility</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 class="footer__title">Get in Touch</h3>

          <p className="footer__form-description">
            Question or feedback? <br />
            We’d love to hear from you
          </p>

          <form action="" className="footer__form">
            <div className="footer__relative">
              <input type="email" placeholder="Email Address" className="footer__input" />
              <i class="ri-send-plane-fill"></i>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer