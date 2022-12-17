import styled from "styled-components";
import { Pagination } from "@mui/material";
export const AreaPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0 100px;
`;

export const PaginationRoot = styled(Pagination)({
  "&.MuiPagination-root": {
    button: {
      position: "inherit",
    },
  },
});
