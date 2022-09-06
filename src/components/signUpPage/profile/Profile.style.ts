import styled from "styled-components";
import { theme } from "../../../style/theme";

import Avatar from "@mui/material/Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

export const ProfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px auto;
`;
export const IconDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: -30px -5px 0 0;
  border-radius: 50%;
  background-color: ${theme.bg09};
`;
export const UserImg = styled(Avatar)({
  "&.MuiAvatar-root": {
    width: 80,
    height: 80,
  },
});
export const UploadIcon = styled(PhotoCameraOutlinedIcon)({
  "&.MuiSvgIcon-root": {
    width: 20,
    height: 20,
    color: `${theme.bg04}`,
    cursor: "pointer",
  },
});
