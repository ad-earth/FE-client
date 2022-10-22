import styled from "styled-components";
import { theme } from "../../../style/theme";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

interface ModalType {
  drop?: boolean;
}

export const OptContainer = styled.div`
  width: 480px;
  @media (max-width: 990px) {
    width: 100vw;
    height: 100vh;
  }
`;
export const OptHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${theme.ls02};
  font-size: ${theme.fs16};
`;
export const Close = styled(CloseRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs24}`,
    color: `${theme.fc02}`,
    position: "absolute",
    top: 15,
    right: 15,
    cursor: "pointer",
  },
});
export const OptContents = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const OptBtn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  @media (max-width: 990px) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`;
export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    width: 62px;
    height: 62px;
    object-fit: contain;
    margin-right: 20px;
  }
`;
export const ItemDesc = styled.div`
  font-size: ${theme.fs15};
  display: flex;
  flex-direction: column;
  span {
    margin-top: 5px;
    color: ${theme.fc15};
  }
`;
export const DropDown = styled.div`
  position: relative;
  padding: 20px 0 30px 0;
  font-size: ${theme.fs12};
  font-weight: bold;
  color: ${theme.fc14};
  drop?: boolean;
`;
export const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ColorDiv = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 10px 15px 10px;
`;
export const OptDrop = styled.div<ModalType>`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  font-weight: normal;
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${(props) =>
    props.drop ? `0.5px solid ${theme.ls14}` : `0.5px solid ${theme.ls08}`};
  cursor: pointer;
`;
export const ArrowUp = styled(KeyboardArrowUpRoundedIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc09}`,
    cursor: "pointer",
  },
});
export const ArrowDown = styled(KeyboardArrowDownRoundedIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc09}`,
    cursor: "pointer",
  },
});
export const DropMenuWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
export const DropMenu = styled.div`
  // position: absolute;
  width: 100%;
  z-index: 5px;
  color: ${theme.fc09};
  background: ${theme.bg01};
  font-size: ${theme.fs14};
  padding: 8px 12px;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 0.5px solid ${theme.ls14};
  border-left: 0.5px solid ${theme.ls14};
  border-right: 0.5px solid ${theme.ls14};
  cursor: pointer;
  span {
    font-weight: 600;
  }
  :hover {
    background: ${theme.bg04};
  }
`;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const SelectBox = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  color: ${theme.fc09};
  font-size: ${theme.fs15};
  box-sizing: border-box;
  background-color: ${theme.rgba12};
`;
export const SelInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.ls02};
`;
export const SelPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  color: ${theme.fc14};
`;
export const CancelBtn = styled(HighlightOffRoundedIcon)({
  color: `${theme.fc04}`,
});

export const Total = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${theme.fs13};
  color: ${theme.fc09};
  span {
    color: ${theme.fc15};
  }
  p {
    color: ${theme.fc15};
    font-size: ${theme.fs18};
  }
`;
