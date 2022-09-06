import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./mainBanner.style";
import "../../../style/carousel.css";

const MainBanner = () => {
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
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220628/552560bec2d12.png" />
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220419/38794519de685.jpg" />
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220519/64b556a81026a.jpg" />
        </Slider>
      ) : (
        <Slider {...setting}>
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220628/7695bbcc55fef.png" />
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220419/4dfd08847b8ab.jpg" />
          <t.BannerImg src="https://cdn.imweb.me/thumbnail/20220519/45c2ed84d3f88.jpg" />
        </Slider>
      )}
    </>
  );
};

export default MainBanner;
