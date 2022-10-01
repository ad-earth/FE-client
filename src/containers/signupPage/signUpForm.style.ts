import styled from "styled-components";
import { theme } from "../../style/theme";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
`;
export const ProfWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SubmitDiv = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const ErrorMsg = styled.p`
  margin: 10px;
  font-size: ${theme.fs14};
  color: ${theme.fc19};
`;
export const DescTxt = styled.p`
  width: 100%;
  text-align: left;
  margin: 30px 0 10px 0;
  font-size: ${theme.fs14};
  color: ${theme.fc14};
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    text-align: left;
    margin: 0 20px 0 5px;
    font-size: ${theme.fs15};
    color: ${theme.fc09};
  }
`;
export const RadioBtn = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px 0;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.ls10};
`;
