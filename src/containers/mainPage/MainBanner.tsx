import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style/carousel.css";

const MainBanner = () => {
  console.log(visualViewport.width);
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
  return (
    <Slider {...setting}>
      {/* 각각의 배너 이미지에 해당 제품 상세페이지 navigate 걸어주기 */}
      <BannerImg src="https://cdn.imweb.me/thumbnail/20220628/7695bbcc55fef.png" />
      <BannerImg src="https://cdn.imweb.me/thumbnail/20220419/4dfd08847b8ab.jpg" />
      <BannerImg src="https://cdn.imweb.me/thumbnail/20220519/45c2ed84d3f88.jpg" />
    </Slider>
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
  bottom: -10px;
`;
