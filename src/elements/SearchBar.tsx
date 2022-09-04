import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { theme } from "../style/theme";

export const SearchBar = () => {
  return (
    <InputDiv>
      <SearchInput placeholder="Search" />
      <SearchIcon />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  height: 34px;
  padding: 0 20px;
  margin: 25px 30px 10px 30px;
  border: 1px solid ${theme.ls03};
  border-radius: 30px;
`;
const SearchInput = styled.input`
  width: 180px;
  padding: 0 10px 0 0;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${theme.fc05};
    font-size: ${theme.fs14};
  }
`;
const SearchIcon = styled(SearchRoundedIcon)({
  color: `${theme.fc05}`,
});
