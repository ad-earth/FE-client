import styled from "styled-components";
import { theme } from "../../../../style/theme";

export const OderListBox = styled.div`
  border: 1px solid ${theme.ls05};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1px;
  padding: 20px 24px 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid ${theme.rgba02};
    flex-direction: column;
    padding: 20px 15px;
  }
`;
export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.p`
  width: 100px;
  text-align: center;
  color: ${theme.fc09};
  font-weight: 600;
  margin-right: 144px;
  cursor: pointer;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ButtonBox = styled.div`
  width: 100px;
  @media (max-width: 990px) {
    width: 100%;
    padding: 10px 0 0 85px;
    box-sizing: border-box;
  }
`;
