import * as t from "./colorIcons.style";
import Tooltip from "@mui/material/Tooltip";
import { ColorIconType } from "./colorIcons.type";

// 작은 사이즈 컬러박스
export const ColorIcon = (props: ColorIconType) => (
  <t.SmallBox>
    <t.ColorBox colorCode={props.colorCode}></t.ColorBox>
  </t.SmallBox>
);

// 큰 사이즈 컬러박스 + hover
export const ColorHoverIcon = ({
  colorCode,
  colorName,
  onClick,
}: ColorIconType) => {
  return (
    <t.BigBox>
      <Tooltip title={`${colorName}`}>
        <t.ColorBox colorCode={colorCode} onClick={onClick}></t.ColorBox>
      </Tooltip>
    </t.BigBox>
  );
};
