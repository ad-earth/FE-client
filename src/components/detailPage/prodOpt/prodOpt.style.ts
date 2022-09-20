import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { theme } from "../../../style/theme";
import { PropsType } from "./prodOpt.type";

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
export const DropMenuWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
export const DropMenu = styled.div`
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
