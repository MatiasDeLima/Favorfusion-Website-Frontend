import React, { useState, useRef, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import images from "../../assets/index.js";

import "./Header.css";

const nav__link = [
  {
    path: "/home",
    diplay: "Home",
  },

  {
    path: "/services" /* Maneira ele faz o scroll para a section services "colocar id na section"*/,
    diplay: "Services",
  },

  {
    path: "/menu",
    diplay: "Menu",
  },

  {
    path: "/foods",
    diplay: "Foods",
  },
];

const Header = () => {
  /*=============== TOGGLE MENU ===============*/
  const [Toggle, showMenu] = useState(false);

  /*=============== CHANGE BG HEADER ===============*/
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      headerRef.current.classList.add("scroll-header");
    } else {
      headerRef.current.classList.remove("scroll-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="/home" className="nav__logo">
          <img src={images.logoImg} alt="logo image" />
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {nav__link.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "active-link" : ""
                  }
                >
                  {item.diplay}
                </NavLink>
              </li>
            ))}
            <div className="nav__buttons">
              <button className="register__button button">
                <Link to="/register">Sign Up</Link>
              </button>
              <button className="login__button">
                <Link to="/login">Sign In</Link>
              </button>
            </div>
          </ul>

          <div className="nav__close" onClick={() => showMenu(!Toggle)}>
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div className="header__actions-buttons">
          <div className="cart__button">
            <i class="ri-shopping-bag-line"></i>
            <span className="cart__button-notify">1</span>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="ri-menu-line"></i>
          </div>

          <div className="profile__button">
            <img src={images.profileImg} alt="profile image" />
          </div>

          <div className="header__buttons">
            <button className="header__login-btn">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="header__register-btn button">
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
