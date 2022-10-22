import styled from "styled-components";
import { theme } from "../../../style/theme";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const SchContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 400px;
`;
export const Close = styled(CloseRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs40}`,
    color: `${theme.ls16}`,
    position: "absolute",
    top: 15,
    right: 15,
    cursor: "pointer",
  },
});
export const SchInput = styled.div`
  width: 60%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.ls16};
  input {
    width: 90%;
    height: 100%;
    border: none;
    font-size: ${theme.fs24};
    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
    ::placeholder {
      color: ${theme.fc15};
    }
  }
`;
export const SchIcon = styled(SearchRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs40}`,
    color: `${theme.fc15}`,
    cursor: "pointer",
  },
});
