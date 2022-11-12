import styled from "styled-components";
import { theme } from "../../../../style/theme";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface Type {
  isChecked?: boolean;
}

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
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs24}`,
    color: `${theme.fc02}`,
    position: "absolute",
    top: 15,
    right: 15,
    cursor: "pointer",
  },
});
export const SearchBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
`;
export const SearchNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  button {
    width: 50%;
    fontsize: ${theme.fs14};
    font-weight: bold;
  }
`;
export const CheckedBtn = styled.button<Type>`
  height: 50px;
  border: ${(props) =>
    props.isChecked
      ? `0.5px solid ${theme.ls16}`
      : `0.5px solid ${theme.ls02}`};
  border-bottom: ${(props) =>
    props.isChecked ? "none" : `0.5px solid ${theme.ls16}`};
  background-color: ${(props) =>
    props.isChecked ? `${theme.bg01}` : `${theme.bg03}`};
  color: ${(props) => (props.isChecked ? `${theme.fc15}` : `${theme.fc08}`)};
`;
