import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./mainBanner.style";
import "../../../style/carousel.css";
import { mainBanner, mainBanner990 } from "../../../shared/utils/imgUrls";

const MainBanner = () => {
  const navigate = useNavigate();
  // carousel option
  const setting = {
    autoplaySpeed: 3000,
    autoplay: true,
    dotsClass: "dotsCustom",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <t.DotsWrapper>
        <ul>{dots}</ul>
      </t.DotsWrapper>
    ),
  };
  //뷰포트 사이즈에 따라 배너 이미지 변경
  const [viewport, setViewport] = useState(visualViewport.width);
  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <>
      {viewport <= 990 ? (
        <Slider {...setting}>
          {mainBanner990.map((x) => {
            return (
              <t.BannerImg
                key={x.id}
                onClick={() => navigate(`/list/${x.nav}`)}
                src={x.url}
                alt="배너"
              />
            );
          })}
        </Slider>
      ) : (
        <Slider {...setting}>
          {mainBanner.map((x) => {
            return (
              <t.BannerImg
                key={x.id}
                onClick={() => navigate(`/list/${x.nav}`)}
                src={x.url}
                alt="배너"
              />
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default MainBanner;
