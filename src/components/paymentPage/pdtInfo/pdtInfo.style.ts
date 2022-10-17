import styled from "styled-components";
import { theme } from "../../../style/theme";

export const ListArea = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.rgba04};
  padding: 14px;
  box-sizing: border-box;
  margin-top: -1px;
`;
export const PdArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PdInfoDiv = styled.div`
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
  font-size: ${({ theme }) => theme.fs15};
  line-height: 24px;
  & p {
    margin: 0;
  }
`;
export const ProductName = styled.p`
  color: ${theme.fc14};
  margin: 0 0 4px;
  font-size: ${({ theme }) => theme.fs14};
`;
export const ProducOption = styled.p`
  opacity: 0.7;
  font-size: ${({ theme }) => theme.fs12};
`;
export const ProducPrice = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  font-weight: bold;
`;
