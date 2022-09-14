import styled from "styled-components";

export const ProductInfoBox = styled.div`
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  cursor: pointer;
`;
export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  src= "";
  margin-right:16px;
`;
export const ProductInfo = styled.div`
  line-height: 24px;
  & p {
    margin: 0;
  }
`;
export const ProducName = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.fc14};
`;
export const ProducOption = styled.p`
  font-size: 0.85rem;
  opacity: 0.7;
`;
export const ProducPrice = styled.p`
  font-size: 0.85rem;
`;
