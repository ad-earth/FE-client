import styled from "styled-components";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useRef } from "react";

const SqSearchBar = () => {
  const kewordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = kewordRef.current!.value;
    console.log(enteredText);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Div>
          <InputDiv>
            <SearchIcon onClick={submitHandler} />
            <input placeholder="검색" type="text" ref={kewordRef} />
            <Officon />
          </InputDiv>
        </Div>
      </form>
    </>
  );
};
export default SqSearchBar;

const Div = styled.div`
  max-width: 350px;
  margin: 55px auto;
  position: relative;
`;
const InputDiv = styled.div`
  background-color: ${({ theme }) => theme.rgba01};
  display: flex;
  align-items: center;
  justify-content: flex-start
  width: 80%;
  height: 34px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.ls14};
  border-radius: 3px;
  ::selection {
    background-color:${({ theme }) => theme.bg16};
    color: ${({ theme }) => theme.fc01};
  }
  & input {
  background-color: transparent;
  width: 100%;
  padding: 0 14px 0 0;
  margin: 0 10px;
  border: none;
  :focus {
    outline: none;
  }
  ::selection {
    background-color:  ${({ theme }) => theme.bg16};
    color: ${({ theme }) => theme.fc01};
  }
  ::placeholder {
    color: ${({ theme }) => theme.bg09};
    font-size: ${({ theme }) => theme.fs14};
  }}

`;
const SearchIcon = styled(SearchRoundedIcon)({
  color: "#999",
  cursor: "pointer",
});

const Officon = styled(HighlightOffIcon)({
  color: "#999",
  cursor: "pointer",
});
