import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { theme } from "../../../style/theme";

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
  color: `${theme.fc02}`,
  position: "absolute",
  top: 15,
  right: 15,
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
export const InfoTxt = styled.div`
  width: 100%;
  color: ${theme.fc14};
  font-size: ${theme.fs14};
  text-align: center;
`;
export const InputDiv = styled.div`
  margin: 30px 0;
`;
export const InputWrapper = styled.div`
  margin: 15px 0;
`;
