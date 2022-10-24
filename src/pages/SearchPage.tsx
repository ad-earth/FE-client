import { useRef, useState } from "react";
import * as t from "../components/searchPage/sqSearchBar/sqSearchBar.style";

import SearchBody from "../containers/searchPage/searchBody/SearchBody";
import useSearchDataList from "../containers/searchPage/searchBody/useSearchBody";
import PageBtn from "../components/listPage/pagination/PageBtn";
import { SearchType } from "../containers/searchPage/searchBody/searchPage.type";
import { useNavigate } from "react-router-dom";
import { EmptyDiv } from "../components/searchPage/searchNav/SearchNav";

const SearchPage = () => {
  const navigate = useNavigate();
  const [keyParams, setKeyParams] = useState<string>("욕실");
  const [pageParams, setPageParams] = useState<number>(1);

  const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const submitHandler = (event: React.FormEvent) => {
    const keyParams = keywordRef.current!.value;
    navigate(`/search/${keyParams}`);
    event.preventDefault();
    setKeyParams(keyParams);
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
                <input placeholder="검색" type="text" ref={keywordRef} />
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
            <EmptyDiv message={"검색어를 입력해주세요."} />
          ) : null}
          <PageBtn
            page={pageParams}
            setPage={setPageParams}
            cnt={SearchListData.cnt}
          />
        </>
      )}
    </>
  );
};
export default SearchPage;
