import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./newCarousel.style";
import "../../../style/carousel.css";
import Card from "../../card/Card";
import { useNewCarousel } from "./useNewCarousel";

const NewCarousel = () => {
  const navigate = useNavigate();
  const newProducts = useNewCarousel();

  // carousel option
  const setting = {
    autoplaySpeed: 3000,
    autoplay: true,
    dotsClass: "slick-dots",
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <t.MainContainer>
      <Slider {...setting}>
        {newProducts.map((x, idx) => {
          return (
            <div
              key={x.p_No}
              onClick={() => navigate(`/detail/main/${x.p_No}`)}
            >
              <Card
                pThumbnail={x.p_Thumbnail}
                aBrand={x.a_Brand}
                pName={x.p_Name}
                pCost={x.p_Cost}
                pDiscount={x.p_Discount}
                pSoldOut={x.p_Soldout}
                pBest={x.p_Best}
                pNew={x.p_New}
                pSale={x.p_Sale}
              />
            </div>
          );
        })}
      </Slider>
    </t.MainContainer>
  );
};

export default NewCarousel;
