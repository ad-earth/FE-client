import styled from "styled-components";
import { theme } from "../../style/theme";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Badge from "@mui/material/Badge";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${theme.fc02};
`;
export const HeaderWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;
export const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  float: left;
  align-items: center;
  box-sizing: border-box;
  margin: 22px 0;
  img {
    width: 25%;
    object-fit: contain;
    margin-left: 10px;
  }
  p {
    font-size: ${theme.fs16};
    color: ${theme.fc15};
    margin-left: 10px;
    :hover {
      color: ${theme.fc05};
      cursor: pointer;
    }
  }
  @media (max-width: 798px) {
    img {
      width: 100px;
    }
  }
`;
export const RightDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  margin: 22px 0;
  span {
    font-size: ${theme.fs16};
    color: ${theme.fc15};
    margin-right: 10px;
  }
`;
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
export const UserIcon = styled(PersonOutlineOutlinedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    marginRight: "10px",
    cursor: "pointer",
  },
});
export const ShopIcon = styled(ShoppingBagOutlinedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    marginRight: "5px",
    cursor: "pointer",
  },
});
export const SchIcon = styled(SearchRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    marginRight: "5px",
    cursor: "pointer",
  },
});
export const EtcIcon = styled(DehazeRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    marginRight: "5px",
    cursor: "pointer",
  },
});
