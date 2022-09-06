import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { theme } from "../../../style/theme";

interface PropsType {
  drop: boolean;
}

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const Option = styled.div`
  margin-top: 24px;
  color: ${theme.fc09};
  font-size: ${theme.fs12};
  font-weight: 600;
`;
export const OptDropDown = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${(props: PropsType) =>
    props.drop ? `0.5px solid ${theme.ls14}` : `0.5px solid ${theme.ls08}`};
  cursor: pointer;
`;
export const IcToggleUp = styled(KeyboardArrowUpRoundedIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc04}`,
  },
});
export const IcToggleDown = styled(KeyboardArrowDownRoundedIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc04}`,
  },
});
export const DropMenu = styled.div`
  position: absolute;
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
export const OptBox = styled.div`
  width: 100%;
  font-size: ${theme.fs12};
  color: ${theme.fc09};
  background: ${theme.rgba01};
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
export const OptWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IcX = styled(HighlightOffRoundedIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc04}`,
    cursor: `pointer`,
  },
});
export const CountWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  margin-top: 25px;
  span {
    color: ${theme.fc15};
  }
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 25px;
`;
