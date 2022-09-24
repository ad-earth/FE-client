import { useRef, useState } from "react";
import * as t from "../components/searchPage/sqSearchBar/sqSearchBar.style";

import SearchBody from "../containers/searchPage/searchBody/SearchBody";
import SPageBtn from "../components/searchPage/sPageBtn/SPageBtn";
import useSearchDataList from "../containers/searchPage/searchBody/useSearchBody";
import { SearchType } from "../containers/searchPage/searchBody/searchPage.type";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const [keyParams, setKeyParams] = useState<string>("");

  const { pageNo } = useParams<{ pageNo: string }>();
  const [pageParams, setPageParams] = useState<string>(pageNo ? pageNo : `1`);

  const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const submitHandler = (event: React.FormEvent) => {
    const keyParams = keywordRef.current!.value;
    event.preventDefault();
    setKeyParams(keyParams);
  };

  const SearchListData: SearchType = useSearchDataList(keyParams, pageParams);
  console.log(submitHandler);

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
          <SPageBtn cnt={SearchListData.cnt} />
        </>
      )}
    </>
  );
};
export default SearchPage;
