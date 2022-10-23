import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./productCarousel.style";
import { PropsType } from "./productCarousel.type";

const ProductCarousel = (props: PropsType) => {
  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <t.MainContainer>
      <Slider {...setting}>
        {props.imgs?.map((img, idx) => {
          return (
            <>
              <t.ProdImg key={idx} src={img} alt="상품 이미지" />
              <t.Page>
                {idx + 1}/ {props.imgs?.length}
              </t.Page>
            </>
          );
        })}
      </Slider>
    </t.MainContainer>
  );
};

export default ProductCarousel;
