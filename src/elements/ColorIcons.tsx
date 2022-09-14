import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

import { theme } from "../style/theme";

interface ColorIconType {
  colorCode?: Array<string | number>[];
  colorName?: string;
  onClick?: () => void;
}

// 작은 사이즈 컬러박스
export const ColorIcon = (props: ColorIconType) => (
  <SmallBox>
    <ColorBox colorCode={props.colorCode}></ColorBox>
  </SmallBox>
);

// 큰 사이즈 컬러박스 + hover
export const ColorHoverIcon = ({
  colorCode,
  colorName,
  onClick,
}: ColorIconType) => {
  return (
    <BigBox>
      <Tooltip title={`${colorName}`}>
        <ColorBox colorCode={colorCode} onClick={onClick}></ColorBox>
      </Tooltip>
    </BigBox>
  );
};
const SmallBox = styled.div`
  width: 9px;
  height: 9px;
`;
const BigBox = styled.div`
  width: 24px;
  height: 24px;
`;
const ColorBox = styled.div<ColorIconType>`
  background-color: ${(props) => props.colorCode};
  border: 1px solid ${theme.ls04};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
`;
