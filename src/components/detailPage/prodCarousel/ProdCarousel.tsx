import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./prodCarousel.style";

const ProdCarousel = () => {
  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <t.MainContainer>
      <Slider {...setting}>
        <t.ProdImg src="https://cdn.imweb.me/thumbnail/20220816/ed7c65d28916d.jpg" />
        <t.ProdImg src="https://cdn.imweb.me/thumbnail/20220816/1ff8ce0d9cc08.jpg" />
        <t.ProdImg src="https://cdn.imweb.me/thumbnail/20220331/6a2e9b4face67.jpg" />
      </Slider>
      <t.Page>1 / 3</t.Page>
    </t.MainContainer>
  );
};

export default ProdCarousel;
