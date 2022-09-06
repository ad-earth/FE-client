import styled from "styled-components";
import { theme } from "../../style/theme";

export const LogInWrapper = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 990px) {
    width: 90%;
  }
`;
export const CheckWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;
export const CheckLabel = styled.span`
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  margin-left: 4px;
`;
export const LogInCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.ls10};
`;
export const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
export const AddInfo = styled.span`
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  cursor: pointer;
`;
