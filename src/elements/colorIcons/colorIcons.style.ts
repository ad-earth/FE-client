import styled from "styled-components";
import { theme } from "../../style/theme";
import { ColorIconType } from "./colorIcons.type";

export const SmallBox = styled.div`
  width: 9px;
  height: 9px;
`;
export const BigBox = styled.div`
  width: 24px;
  height: 24px;
`;
export const ColorBox = styled.div<ColorIconType>`
  background-color: ${(props) => props.colorCode};
  border: 1px solid ${theme.ls04};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
`;
