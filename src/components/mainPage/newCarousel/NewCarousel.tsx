import * as t from "./newCarousel.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsType } from "../newProducts/newProducts.type";
import { useViewport } from "../../../hooks/useViewport";
import "../../../style/carousel.css";
import Card from "../../card/Card";

const NewCarousel = (props: PropsType) => {
  const viewport = useViewport();

  let carouselSetting;

  if (viewport <= 990) {
    carouselSetting = {
      autoplaySpeed: 3000,
      autoplay: true,
      dotsClass: "slick-dots",
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
  } else {
    carouselSetting = {
      autoplaySpeed: 3000,
      autoplay: true,
      dotsClass: "slick-dots",
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  }

  return (
    <t.MainContainer>
      <Slider {...carouselSetting}>
        {props.newList?.map((product) => (
          <div key={product.p_No}>
            <Card
              pThumbnail={product.p_Thumbnail}
              aBrand={product.a_Brand}
              pName={product.p_Name}
              pCost={product.p_Cost}
              pDiscount={product.p_Discount}
              pSoldOut={product.p_Soldout}
              pBest={product.p_Best}
              pNew={product.p_New}
              pSale={product.p_Sale}
              pNo={product.p_No}
            />
          </div>
        ))}
      </Slider>
    </t.MainContainer>
  );
};

export default NewCarousel;
