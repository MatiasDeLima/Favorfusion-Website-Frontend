import React from "react";
import images from "../constants/images";

import "./common-section.css";

const CommonSection = ({title}) => {
  return (
    <>
      <section class="details-img common__section">
        <img src={images.commonBg} alt="" class="details__image-bg" />
        <div class="details__img-bg"></div>
        <h2 class="details__img-title">
          {title}
        </h2>
      </section>
    </>
  );
};

export default CommonSection;
