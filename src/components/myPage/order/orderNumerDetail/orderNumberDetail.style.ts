import styled from "styled-components";

export const OrderNumberBox = styled.div`
  font-size: ${({ theme }) => theme.fs15};
  line-height: 1.6;
  border: 1px solid ${({ theme }) => theme.rgba06};
  display: flex;
  margin-bottom: 10px;
  padding: 16px 20px;
  & span {
    margin-right: 4px;
  }
  @media (max-width: 990px) {
    border: none;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
export const OrderDate = styled.div`
  margin-right: 20px;
`;
export const OrderNumberInfo = styled.div``;
