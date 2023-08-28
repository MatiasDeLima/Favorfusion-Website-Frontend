import React from 'react'
import images from "./../constants/images.js"

import "./../styles/Register.css"

const Register = () => {
  return (
    <section className="register section">
      <div className="register__container container grid">
        <div className="register__image">
          <img src={images.registerImage} alt="" />
        </div>


        <form action="" className="register__form">
          <h3 className="register__form-data">
            Sign Up
          </h3>

          <div className="register__inputs">
            <div className="register__input-flex">
              <input type="text" className="register__input" placeholder="Enter Your Name" />
              <i class="ri-user-line"></i>
            </div>

            <div className="register__input-flex">
              <input type="text" className="register__input" placeholder="Enter Your E-mail" />
              <i class="ri-chat-2-line"></i>
            </div>

            <div className="register__input-flex">
              <input type="text" className="register__input" placeholder="Enter Your Password" />
              <i class="ri-eye-line"></i>
            </div>

          </div>

          <div className="register__buttons">
            <button className="button" >Sign Up</button>
            <p className="register__name">Already haven an account?</p>
            <button className="button register-button" >Sign In</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register