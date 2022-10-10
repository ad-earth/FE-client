import styled from "styled-components";
import { theme } from "../../../style/theme";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";

export const ScHeadContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${theme.bg16};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: top 0.2s ease-in-out;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ScHeadWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin: 0 auto;
  img {
    width: 50px;
    object-fit: contain;
  }
`;
export const LeftDiv = styled.div`
  width: 50%;
  margin-left: 20px;
  font-size: ${theme.fs16};
  color: ${theme.fc01};
  font-weight: 600;
  :hover {
    color: ${theme.fc20};
  }
`;
export const RightDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    font-size: ${theme.fs16};
    color: ${theme.fc01};
    margin-right: 20px;
    :hover {
      color: ${theme.fc20};
    }
  }
`;
export const ShopIcon = styled(ShoppingBagOutlinedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc01}`,
    marginRight: "5px",
    cursor: "pointer",
    "&:hover": {
      color: `${theme.fc20}`,
    },
  },
});
export const UserIcon = styled(PersonOutlineOutlinedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc01}`,
    marginRight: "10px",
    marginTop: "10px",
    cursor: "pointer",
    "&:hover": {
      color: `${theme.fc20}`,
    },
  },
});
export const CountBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    fontSize: 10,
    minWidth: "15px",
    height: "15px",
    top: 28,
    padding: 0,
    marginRight: "10px",
    color: `${theme.fc01}`,
    backgroundColor: `${theme.fc09}`,
  },
});
