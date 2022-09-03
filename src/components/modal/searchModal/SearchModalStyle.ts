import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { theme } from "../../../style/theme";

export const IdContainer = styled.div`
  width: 370px;
`;
export const IdHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${theme.ls02};
  font-size: ${theme.fs15};
  font-weight: 700;
  color: ${theme.fc14};
`;
export const Close = styled(CloseRoundedIcon)({
  color: `${theme.fc02}`,
  position: "absolute",
  top: 15,
  right: 15,
});
