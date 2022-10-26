import * as t from "./productName.style";
import { Badge } from "../../../elements/Badge";
import { useDiscount } from "./useDiscount";
import { useAppSelector } from "../../../redux/store";

const ProductName = () => {
  const detailData = useAppSelector((store) => store.detailSlice.details);

  // 상품 할인가 계산
  const discountedPrice = useDiscount(
    detailData?.product.p_Cost,
    detailData?.product.p_Discount
  );

  return (
    <t.MainContainer>
      <t.NameWrapper>
        <t.Name>
          [{detailData?.product.a_Brand}] {detailData?.product.p_Name}
        </t.Name>
        {detailData?.product.p_Best && <Badge type={"best"}>BEST</Badge>}
        {detailData?.product.p_New && <Badge type={"new"}>NEW</Badge>}
        {detailData?.product.p_Sale && <Badge type={"sale"}>SALE</Badge>}
        {detailData?.product.p_Soldout && (
          <Badge type={"soldout"}>SOLDOUT</Badge>
        )}
      </t.NameWrapper>
      {detailData?.product.p_Discount !== 0 ? (
        <t.PriceWrapper>
          <t.Price>{discountedPrice?.toLocaleString()}원</t.Price>
          <t.DiscountedPrice>
            {detailData?.product.p_Cost?.toLocaleString()}원
          </t.DiscountedPrice>
        </t.PriceWrapper>
      ) : (
        <t.Price>{detailData?.product.p_Cost?.toLocaleString()}원</t.Price>
      )}
      <t.Line />
    </t.MainContainer>
  );
};

export default ProductName;
