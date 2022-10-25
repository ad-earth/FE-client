import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./productCarousel.style";
import { useAppSelector } from "../../../redux/store";

const ProductCarousel = () => {
  const detailData = useAppSelector((state) => state.detailSlice.details);

  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <t.MainContainer>
      <Slider {...setting}>
        {detailData?.product.p_Thumbnail.map((img, idx) => {
          return (
            <div key={idx}>
              <t.ProdImg src={img} alt="상품 이미지" />
              <t.Page>
                {idx + 1}/ {detailData?.product.p_Thumbnail.length}
              </t.Page>
            </div>
          );
        })}
      </Slider>
    </t.MainContainer>
  );
};

export default ProductCarousel;
