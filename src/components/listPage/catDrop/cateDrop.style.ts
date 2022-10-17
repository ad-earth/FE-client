import styled from "styled-components";
import { theme } from "../../../style/theme";

export const BtnArea = styled.div`
  width: 95%;
  padding: 0 40px;
  margin: 0px 15px;
  text-align: right;
`;
export const DropBtn = styled.select`
  padding: 0 25px;
  margin: 30px 20px 15px;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  border: none;
  text-align: right;
  color: ${theme.fc09};
  outline-color: ${theme.ls01};
  cursor: pointer;
`;
