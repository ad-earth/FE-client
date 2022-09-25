import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as t from "./prodCarousel.style";
import { useProdInfo } from "../../../containers/detailPage/prodInfo/useProdInfo";
import { useState } from "react";

const ProdCarousel = () => {
  const data = useProdInfo();
  // carousel option
  const setting = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <t.MainContainer>
      <Slider {...setting}>
        {data.p_Thumbnail &&
          data.p_Thumbnail.map((x: string, idx: number) => {
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
