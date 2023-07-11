import React, { useState, useRef, useEffect } from 'react'

import { NavLink, Link } from 'react-router-dom';
import './Header.css'

import images from '../../constants/images';

const nav__link = [
  {
    path: '/home',
    diplay: 'Why FastFood?'
  },

  {
    path: '/services', /* Maneira ele faz o scroll para a section services "colocar id na section"*/
    diplay: 'Services'
  },

  {
    path: '/menu',
    diplay: 'Menu'
  },

  {
    path: '/contact',
    diplay: 'Contact us'
  },

  {
    path: '/foods',
    diplay: 'Foods'
  }
]

const Header = () => {
  /*=============== TOGGLE MENU ===============*/
  const [Toggle, showMenu] = useState(false);


  /*=============== CHANGE BG HEADER ===============*/
  const headerRef = useRef(null)

  const headerFunc = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerRef.current.classList.add('scroll-header')
    } else {
      headerRef.current.classList.remove('scroll-header')
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])


  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href='/home' className="nav__logo">
          <img src={images.logo} alt="logo icon" className="logo__icon" /> FastFood
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {
              nav__link.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.path}  className={navClass => navClass.isActive ? 'active-link' : ''}>{item.diplay}</NavLink>
                </li>
              ))
            }
          </ul>

          <div className="nav__close" onClick={() => showMenu(!Toggle)}>
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <button className="nav__button button" ><Link to='/login'>Sign In</Link></button>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header