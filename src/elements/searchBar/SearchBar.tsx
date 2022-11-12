import * as t from "./searchBar.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const [schTrue, setSchTrue] = useState<boolean>(false);

  const handleSubmit = () => {
    navigate(`/search/${keyword}`);
    setSchTrue(true);
  };

  useEffect(() => {
    if (schTrue) {
      setKeyword("");
      setSchTrue(false);
    }
  }, [schTrue]);

  return (
    <t.InputDiv>
      <t.SearchInput
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <t.SearchIcon />
    </t.InputDiv>
  );
};
