import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../style/theme";

export const Xbtn = styled(CloseIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc05}`,
    fontSize: `${theme.fs26}`,
    cursor: "pointer",
    float: "right",
    margin: "20px 20px 0 0",
  },
});
export const BtnDiv = styled.div`
  width: 100%;
  @media (max-width: 990px) {
    display: none;
    padding: 10px 0;
  }
`;
export const Wrap = styled.div`
  padding-bottom: 20px;
  opacity: 0.99;
  @media (max-width: 990px) {
    width: 80vw;
    height: 80vh;
    padding: 1% 0;
    margin-bottom: 2%;
  }
`;
