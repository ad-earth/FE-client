import { useRef, useState } from "react";
import * as t from "../components/searchPage/sqSearchBar/sqSearchBar.style";

import SearchBody from "../containers/searchPage/searchBody/SearchBody";
import useSearchDataList from "../containers/searchPage/searchBody/useSearchBody";
import PageBtn from "../components/listPage/pagination/PageBtn";
import { SearchType } from "../containers/searchPage/searchBody/searchPage.type";
import { useNavigate, useParams } from "react-router-dom";
import { EmptyDiv } from "../components/searchPage/searchNav/SearchNav";

const SearchPage = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const [pageParams, setPageParams] = useState<number>(1);
  const { keyParams } = useParams();

  const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const submitHandler = (event: React.FormEvent) => {
    const keyword = keywordRef.current!.value;
    navigate(`/search/${keyword}`);
    event.preventDefault();
    keyParams ? setKeyword(keyParams) : setKeyword(keyword);
  };

  const SearchListData: SearchType = useSearchDataList(
    keyParams,
    String(pageParams)
  );

  const onClearInput = () => {
    keywordRef.current.value = "";
  };
  return (
    <>
      {SearchListData && (
        <>
          <form onSubmit={submitHandler}>
            <t.Div>
              <t.InputDiv>
                <t.SearchIcon onClick={submitHandler} />
                <input
                  placeholder="검색"
                  type="text"
                  defaultValue={keyParams ? keyParams : null}
                  ref={keywordRef}
                />
                <t.Officon onClick={onClearInput} />
              </t.InputDiv>
            </t.Div>
          </form>
          <SearchBody
            products={SearchListData.products}
            adProducts={SearchListData.adProducts}
            userLike={SearchListData.userLike}
            cnt={SearchListData.cnt}
            pageNo={SearchListData.pageNo}
          />
          {SearchListData.cnt === 0 ? (
            <EmptyDiv message={"검색된 정보가 없습니다."} />
          ) : null}
          <PageBtn cnt={SearchListData.cnt} />
        </>
      )}
    </>
  );
};
export default SearchPage;
