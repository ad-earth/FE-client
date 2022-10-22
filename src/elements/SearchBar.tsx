import styled from "styled-components";
import { theme } from "../style/theme";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const SearchBar = () => {
  // const navigate = useNavigate();
  // const [keyParams, setKeyParams] = useState<string>("욕실");
  // const [pageParams, setPageParams] = useState<number>(1);

  // const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  // const submitHandler = (event: React.FormEvent) => {
  //   const keyParams = keywordRef.current!.value;
  //   navigate(`/search/${keyParams}`);
  //   event.preventDefault();
  //   setKeyParams(keyParams);
  // };

  return (
    // <form onSubmit={submitHandler}>
    <InputDiv>
      <SearchInput
        placeholder="Search"
        type="text"
        // ref={keywordRef}
      />
      <SearchIcon
      // onClick={submitHandler}
      />
    </InputDiv>
    // </form>
  );
};

const InputDiv = styled.div`
  width: 40%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 4px 20px 0 0;
  border: 1px solid ${theme.ls03};
  border-radius: 30px;
  @media (max-width: 990px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  width: 80%;
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
