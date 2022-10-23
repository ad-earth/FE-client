import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import * as t from "./details.style";
import { useDetailQuery } from "./useDetailQuery";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";

const Details = () => {
  const { productNo, keyword } = useParams();
  const detailData = useDetailQuery(Number(productNo), keyword);

  const { productDetail, details } = useMemo(
    () => ({
      productDetail: detailData.data?.data.product,
      details: detailData.data?.data,
    }),
    [detailData]
  );

  //뷰포트 사이즈에 따라 상품 썸네일 carousel로 변경
  const [viewport, setViewport] = useState(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <t.ProdInfoContainer>
      {viewport <= 990 ? (
        <ProductCarousel imgs={productDetail?.p_Thumbnail} />
      ) : (
        <ProductImgs imgs={productDetail?.p_Thumbnail} />
      )}
      <t.InfoWrapper>
        <ProductName
          price={productDetail?.p_Cost}
          discount={productDetail?.p_Discount}
          brand={productDetail?.a_Brand}
          name={productDetail?.p_Name}
          best={productDetail?.p_Best}
          new={productDetail?.p_New}
          sale={productDetail?.p_Sale}
          soldout={productDetail?.p_Soldout}
        />
        <ProductSummary
          desc={productDetail?.p_Desc}
          brand={productDetail?.a_Brand}
        />
        <ProductOptions
          details={details}
          options={productDetail?.p_Option}
          price={productDetail?.p_Cost}
          discount={productDetail?.p_Discount}
          productNo={productDetail?.p_No}
        />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};

export default Details;
