import styled from "styled-components";

const Product = () => {
  return (
    <ProductInfoBox>
      <ProductImg />
      <ProductInfo>
        <ProducName>[지구샵] 대나무 칫솔</ProducName>
        <ProducOption>성인용(19cm)</ProducOption>
        <ProducPrice>3,000원 / 3 개</ProducPrice>
      </ProductInfo>
    </ProductInfoBox>
  );
};

export default Product;

const ProductInfoBox = styled.div`
  font-size: 15px;
  display: flex;
  cursor: pointer;
`;
const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  src= "";
  margin-right:16px;
`;
const ProductInfo = styled.div`
  line-height: 24px;
  & p {
    margin: 0;
  }
`;
const ProducName = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;
const ProducOption = styled.p`
  font-size: 0.85rem;
  opacity: 0.7;
`;
const ProducPrice = styled.p`
  font-size: 0.85rem;
`;
