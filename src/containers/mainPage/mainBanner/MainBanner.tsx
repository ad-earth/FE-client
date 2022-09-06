import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style/carousel.css";

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
      <DotsWrapper>
        <ul>{dots}</ul>
      </DotsWrapper>
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
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220628/552560bec2d12.png" />
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220419/38794519de685.jpg" />
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220519/64b556a81026a.jpg" />
        </Slider>
      ) : (
        <Slider {...setting}>
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220628/7695bbcc55fef.png" />
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220419/4dfd08847b8ab.jpg" />
          <BannerImg src="https://cdn.imweb.me/thumbnail/20220519/45c2ed84d3f88.jpg" />
        </Slider>
      )}
    </>
  );
};

export default MainBanner;

const BannerImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
const DotsWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
`;
