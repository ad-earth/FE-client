import * as t from "./product.style";

const Product = () => {
  return (
    <t.ProductInfoBox>
      <t.ProductImg />
      <t.ProductInfo>
        <t.ProducName>[지구샵] 대나무 칫솔</t.ProducName>
        <t.ProducOption>성인용(19cm)</t.ProducOption>
        <t.ProducPrice>3,000원 / 3 개</t.ProducPrice>
      </t.ProductInfo>
    </t.ProductInfoBox>
  );
};


export default Product;
