import * as t from "./productSummary.style";
import { useAppSelector } from "../../../redux/store";

const ProductSummary = () => {
  const detailData = useAppSelector((store) => store.detailSlice.details);

  return (
    <t.MainContainer>
      <p>{detailData?.product.p_Desc}</p>
      <t.Description>
        <span>원산지</span>&ensp; 대한민국 <br />
        <span>브랜드</span>&ensp; {detailData?.product.a_Brand} <br />
        <span>배송비</span>&ensp; 전 품목 무료배송 <br />
      </t.Description>
    </t.MainContainer>
  );
};

export default ProductSummary;
