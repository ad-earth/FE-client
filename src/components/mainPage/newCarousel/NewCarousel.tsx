import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./newCarousel.style";
import "../../../style/carousel.css";
import Card from "../../card/Card";
import { PropsType } from "../newProducts/newProducts.type";

const NewCarousel = (props: PropsType) => {
  const navigate = useNavigate();

  //뷰포트 사이즈
  const [viewport, setViewport] = useState(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  // carousel option
  let setting;

  if (viewport <= 990) {
    setting = {
      autoplaySpeed: 3000,
      autoplay: true,
      dotsClass: "slick-dots",
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
  } else {
    setting = {
      autoplaySpeed: 3000,
      autoplay: true,
      dotsClass: "slick-dots",
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  }

  return (
    <t.MainContainer>
      <Slider {...setting}>
        {props?.newList?.map((x) => {
          return (
            <div key={x.p_No}>
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
                pNo={x.p_No}
              />
            </div>
          );
        })}
      </Slider>
    </t.MainContainer>
  );
};

export default NewCarousel;
