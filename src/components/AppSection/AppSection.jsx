import React from 'react'
import images from '../../constants/images'
import './AppSection.css'

const AppSection = () => {
  return (
    <section className="app section">
      <div className="app__container container grid">
        <div className="app__data">
          <h3 className="app__subtitle">
            DOWLOAD APP
          </h3>

          <h2 className="app__title">
            Get Started With <br />
            Fastfood Today!
          </h2>

          <p className="app__description">
            “FastFood is the best. Besides the many and delicious meals,
            the service is also very good, especially in the very fast delivery.
            I highly recommend FastFood to you.”
          </p>

          <a href="#" className="button app__button">Get The App</a>
        </div>

        <div className="app__image">
          <img src={images.appImage} alt="app image" />
        </div>
      </div>
    </section>
  )
}

export default AppSection