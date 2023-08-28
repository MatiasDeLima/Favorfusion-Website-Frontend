import React from "react";

import "./../styles/Foods.css";

import FoodList from "../components/Foods/FoodList";
import CommonSection from "../shared/CommonSection";
import { useEffect, useState } from "react";

const Foods = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4); // Later we will use backend data count
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"Tomato With Tofu Salad"} />
      <section class="foods section">
        <div class="foods__container container grid">
          <div class="foods__data">
            <div class="foods__data-info">
              <h4 class="foods__data-subtitle">What we serve</h4>

              <h2 class="foods__data-title">Find the best foods</h2>
            </div>

            <div class="foods__data-form">
              <div>
                <i class="ri-search-line"></i>
                <input
                  type="search"
                  class="foods__from-input"
                  placeholder="Search Your Favorite Food..."
                />
              </div>

              <button class="button button-auto">Search</button>
            </div>
          </div>
          <div className="foods__content grid">
            <FoodList />
          </div>

          <div class="foods__buttons">
            {/*<button class="arrow__button">
              <i class="ri-arrow-left-s-line"></i>
            </button>*/}

            {[...Array(pageCount).keys()].map(number => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? "active__page" : ""}
              >
                {number + 1}
              </button>
            ))}

            {/*<button class=" arrow__button">
              <i class="ri-arrow-right-s-line"></i>
            </button>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Foods;
