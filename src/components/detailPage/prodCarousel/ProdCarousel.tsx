import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./prodCarousel.style";
import { PropsType } from "./prodCarousel.type";

const ProdCarousel = (props: PropsType) => {
  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <t.MainContainer>
      <Slider {...setting}>
        {props.img &&
          props.img.map((x, idx) => {
            return (
              <>
                <t.ProdImg key={idx} src={x} alt="상품 이미지" />
                <t.Page>{idx + 1}/ 3</t.Page>
              </>
            );
          })}
      </Slider>
    </t.MainContainer>
  );
};

export default ProdCarousel;
