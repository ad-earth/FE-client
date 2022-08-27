import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/carousel.css";

const NewCarousel = () => {
  // carousel option
  const setting = {
    autoplaySpeed: 3000,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <SliderContainer>
      <Slider {...setting}>
        <Card>1</Card>
        <Card2>2</Card2>
        <Card>3</Card>
        <Card2>4</Card2>
        <Card>5</Card>
        <Card2>6</Card2>
        <Card>7</Card>
        <Card2>8</Card2>
        <Card>9</Card>
      </Slider>
    </SliderContainer>
  );
};

export default NewCarousel;
const SliderContainer = styled.div`
  width: 50%;
`;
const Card = styled.div`
  width: 200px;
  height: 200px;
  background: lightblue;
`;
const Card2 = styled.div`
  width: 200px;
  height: 200px;
  background: red;
`;
