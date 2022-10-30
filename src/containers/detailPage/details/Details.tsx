import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import QueryString from "qs";

import * as t from "./details.style";
import { useDetailQuery } from "./useDetailQuery";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";
import Error from "../../../elements/error/Error";
import { useAppSelector } from "../../../redux/store";
import { useViewport } from "../../../hooks/useViewport";

const Details = () => {
  const { productNo } = useParams();
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = String(query.keyword);
  useDetailQuery(productNo, keyword ? keyword : null);
  const viewport = useViewport();

  return (
    <t.ProdInfoContainer>
      <Error />
      {viewport <= 990 ? <ProductCarousel /> : <ProductImgs />}
      <t.InfoWrapper>
        <ProductName />
        <ProductSummary />
        <ProductOptions />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};

export default Details;
