import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style/carousel.css";
import Card from "../../Card";

const NewCarousel = () => {
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
    <MainContainer>
      <Slider {...setting}>
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
        <Card
          p_Thumbnail={
            "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
          }
          p_Brand={"지구샵"}
          p_Name={"키친클로스(체크)"}
        />
      </Slider>
    </MainContainer>
  );
};

export default NewCarousel;

const MainContainer = styled.div`
  width: 55%;
  @media (max-width: 990px) {
    width: 100%;
    margin: 0 auto;
  }
`;
