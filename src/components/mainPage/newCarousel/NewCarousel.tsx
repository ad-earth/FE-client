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
  const [changePic, setChangePic] = useState(10);

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
              onMouseEnter={() => setChangePic(idx)}
              onMouseLeave={() => setChangePic(10)}
            >
              {/* {changePic === idx ? (
                <Card
                  p_Thumbnail={x.p_Thumbnail[1]}
                  p_Brand={x.a_Brand}
                  p_Name={x.p_Name}
                  p_Price={x.p_Cost}
                  p_Discount={x.p_Discount}
                  p_Soldout={x.p_Soldout}
                  p_Best={x.p_Best}
                  p_New={x.p_New}
                  p_Sale={x.p_Sale}
                />
              ) : (
                <Card
                  p_Thumbnail={x.p_Thumbnail[0]}
                  p_Brand={x.a_Brand}
                  p_Name={x.p_Name}
                  p_Price={x.p_Cost}
                  p_Discount={x.p_Discount}
                  p_Soldout={x.p_Soldout}
                  p_Best={x.p_Best}
                  p_New={x.p_New}
                  p_Sale={x.p_Sale}
                />
              )} */}
            </div>
          );
        })}
      </Slider>
    </t.MainContainer>
  );
};

export default NewCarousel;
