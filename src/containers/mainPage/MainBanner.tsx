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
  return (
    <Slider {...setting}>
      {/* 각각의 배너 이미지에 해당 제품 상세페이지 navigate 걸어주기 */}
      <BannerImg src="/img/b1.jpeg" />
      <BannerImg src="/img/b2.jpeg" />
      <BannerImg src="/img/b3.png" />
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
  bottom: 0;
`;
