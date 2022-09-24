import styled from "styled-components";

export const Section = styled.div``;
export const OrderListBox = styled.div``;
export const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const List = styled.div`
  margin-bottom: 20px;
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
export const DataNull = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
`;
