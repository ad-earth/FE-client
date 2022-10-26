import styled from "styled-components";
import { theme } from "../../style/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { BtnType } from "./buttons.type";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fs14)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  color: ${(props) => (props.color ? props.color : theme.fc01)};
  border: ${(props: BtnType) => (props.border ? props.border : "none")};
  border-radius: ${(props: BtnType) => (props.radius ? props.radius : "none")};
  background-color: ${(props: BtnType) =>
    props.bgColor ? props.bgColor : theme.bg16};
  padding: ${(props) => (props.padding ? `${props.padding}` : "10px 0")};
  :hover {
    border: ${(props: BtnType) => (props.hBorder ? props.hBorder : "none")};
    background-color: ${(props) =>
      props.hBgColor ? props.hBgColor : theme.bg16};
    transition: 0.5s;
    cursor: pointer;
  }
`;
export const CountBtn = styled.div`
  width: 100px;
  height: 27px;
  border: 1px solid ${theme.ls07};
  background: ${theme.bg01};
  display: flex;
  justify-content: space-between;
`;
export const Minus = styled.button`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: 1px solid ${theme.ls07};
  color: ${theme.fc06};
`;
export const Plus = styled.button`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid ${theme.ls07};
  color: ${theme.fc06};
`;
export const Input = styled.div`
  width: 46px;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(AddRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs18}`,
    cursor: "pointer",
  },
});

export const RemoveIcon = styled(RemoveRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs18}`,
    cursor: "pointer",
  },
});
