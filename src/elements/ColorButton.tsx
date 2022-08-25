
import Tooltip from '@mui/material/Tooltip';
import styled from "styled-components";


interface ColorType{
  colorCode:string;
  colorName:string|undefined;
}

// 작은사이즈 컬러 박스
export const ColorIcon = ({data}:{data:ColorType}) => {
  return (
    <SmallBox>
      <ColorBox colorCode={data.colorCode}></ColorBox>
    </SmallBox>
      
  )
}
// 큰사이즈 컬러  박스+ 호버
export const ColorHoverIcon = ({data}:{data:ColorType}) => {
  return (
    <BigBox>
      <Tooltip title={`${data.colorName}`}>
        <ColorBox colorCode={data.colorCode}  ></ColorBox>
      </Tooltip>
    </BigBox>
  )
}
const SmallBox = styled.div` 
  width:9px;
  height:9px;
`;
const BigBox = styled.div` 
  width:24px;
  height:24px;
`;
const ColorBox = styled.div<any>` 
  background-color: ${(data) => (data.colorCode && data.colorCode)};
  border:1px solid #e0e0e0;
  border-radius: 50%;
  width:100%;
  height:100%;
  text-align:center;
  line-height: 46px;
  cursor : pointer;
`;



