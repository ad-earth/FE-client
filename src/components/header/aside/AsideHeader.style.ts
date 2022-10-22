import styled from "styled-components";
import { theme } from "../../../style/theme";

import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const AsideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  @media (min-width: 991px) {
    display: none;
  }
`;
export const ContentBox = styled.div`
  width: 300px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${theme.bg01};
`;
export const AsideBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: ${theme.rgba09};
`;
export const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  span {
    fontsize: ${theme.fs12};
    color: ${theme.fc15};
  }
`;
export const UserImg = styled(Avatar)({
  "&.MuiAvatar-root": {
    width: 40,
    height: 40,
    marginBottom: 10,
    cursor: "pointer",
  },
});
export const EtcIcon = styled(MoreVertIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    cursor: "pointer",
  },
});
export const ContentBot = styled.div`
  padding: 20px;
  li {
    fontsize: ${theme.fs12};
    color: ${theme.fc15};
    margin-bottom: 20px;
    cursor: "pointer";
  }
`;
