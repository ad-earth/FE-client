import * as t from "./searchBar.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/search/${keyword}`);
  };

  return (
    <t.InputDiv>
      <t.SearchInput
        placeholder="Search"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <t.SearchIcon />
    </t.InputDiv>
  );
};
