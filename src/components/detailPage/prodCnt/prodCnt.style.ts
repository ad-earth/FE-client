import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../style/theme";

export const OptBox = styled.div`
  width: 100%;
  font-size: ${theme.fs12};
  color: ${theme.fc09};
  background: ${theme.rgba01};
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
export const OptWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IcX = styled(CloseIcon)({
  "&.MuiSvgIcon-root": {
    color: `${theme.fc04}`,
    cursor: `pointer`,
  },
});
export const CountWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  margin-top: 25px;
  span {
    color: ${theme.fc15};
  }
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 25px;
`;
