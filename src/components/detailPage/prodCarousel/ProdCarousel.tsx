import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { theme } from "../../../style/theme";

const ProdCarousel = () => {
  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainContainer>
      <Slider {...setting}>
        <ProdImg src="https://cdn.imweb.me/thumbnail/20220816/ed7c65d28916d.jpg" />
        <ProdImg src="https://cdn.imweb.me/thumbnail/20220816/1ff8ce0d9cc08.jpg" />
        <ProdImg src="https://cdn.imweb.me/thumbnail/20220331/6a2e9b4face67.jpg" />
      </Slider>
      <Page>1 / 3</Page>
    </MainContainer>
  );
};

export default ProdCarousel;

const MainContainer = styled.div`
  position: relative;
  width: 98%;
  margin: 0 auto;
`;
const ProdImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Page = styled.div`
  position: absolute;
  width: 40px;
  padding: 3px 8px;
  box-sizing: border-box;
  background: ${theme.bg11};
  color: ${theme.fc01};
  font-size: ${theme.fs12};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  left: 20px;
  bottom: 20px;
`;
