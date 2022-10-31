import styled from "styled-components";
import { theme } from "../../../style/theme";
import CloseIcon from "@mui/icons-material/Close";

export const OptBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: ${theme.rgba01};
  font-size: ${theme.fs12};
  color: ${theme.fc09};
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  span {
    color: ${theme.fc15};
  }
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
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
`;
