import styled from "styled-components";
import { theme } from "../../style/theme";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const BigDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ProdInfo = styled.div`
  width: 63%;
  display: flex;
  flex-direction: row;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 20px;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const SmallProdInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  margin-bottom: 20px;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 20px;
  }
`;
export const SmallDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.rgba10};
  margin-right: 20px;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  font-size: ${theme.fs15};
  border-bottom: 1px solid ${theme.rgba07};
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InfoDiv = styled.div`
  width: 100%;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  p {
    margin-bottom: 15px;
  }
  @media (max-width: 990px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Close = styled(CloseRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc02}`,
    cursor: "pointer",
  },
});
export const Close2 = styled(CloseRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs24}`,
    color: `${theme.fc02}`,
    cursor: "pointer",
  },
});
export const OptDiv = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
  background-color: ${theme.rgba12};
  color: ${theme.fc09};
  padding: 8px 12px 8px 10px;
  div {
    display: flex;
    flex-direction: row;
  }
  span {
    margin-left: 5px;
    font-size: ${theme.fs13};
  }
  @media (max-width: 990px) {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;
export const DetailInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${theme.fc09};
  span {
    margin: 10px 0;
    font-size: ${theme.fs15};
  }
  p {
    margin: 6px 0;
    font-size: ${theme.fs20};
    font-weight: bold;
  }
  &.mid {
    width: 19%;
  }
  &.small {
    width: 15%;
  }
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: ${theme.fs14};
    }
    span {
      margin: 5px 0;
      font-size: ${theme.fs14};
      font-weight: 400;
    }
    &.line {
      padding-bottom: 10px;
      margin: 10px 0;
      border-bottom: 1px solid ${theme.rgba07};
    }
  }
`;
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
