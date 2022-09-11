import styled from "styled-components";
import { theme } from "../../../style/theme";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const Container = styled.div`
  width: 400px;
`;

export const InfoHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${theme.ls02};
  font-size: ${theme.fs20};
  font-weight: 700;
  color: ${theme.fc14};
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
export const InfoBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 24px 24px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto;
`;
export const SubmitDiv = styled.div`
  width: 100%;
  margin-top: 30px;
`;
