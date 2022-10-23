import styled from "styled-components";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  color: ${theme.fc09};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.ls13};
  padding: 15px 10px;
  box-sizing: border-box;
`;
export const CommentText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fs14};
  gap: 5px;
`;
export const StarWrapper = styled.div`
  display: flex;
`;
export const IcStar = styled(StarRoundedIcon)({
  "&.MuiSvgIcon-root": {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc18}`,
  },
});
export const WriterInfo = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fs13};
  gap: 5px;
  text-align: right;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 5px;
  button {
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
