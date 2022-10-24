import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";
import { useCateList } from "../containers/listPage/cardList/useCardList";
import { CardListType } from "../containers/listPage/cardList/cardList.type";
import { EmptyDiv } from "../components/searchPage/searchNav/SearchNav";

export const ListPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortParams, setSortParams] = useState<string>("like");
  const [pageParams, setPageParams] = useState<number>(1);

  //카테고리 api 호출
  const CateListData: CardListType = useCateList(
    category,
    sortParams,
    String(pageParams)
  );

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortParams(e.target.value);
    setPageParams(1);
  };
  return (
    <>
      <CateButton setPage={setPageParams} setSort={setSortParams} />
      {CateListData && (
        <>
          {CateListData && CateListData.cnt === 0 ? null : (
            <CardList
              sortChange={sortChange}
              sort={sortParams}
              products={CateListData && CateListData.products}
              userLike={CateListData.userLike}
              cnt={CateListData.cnt}
              pageNo={CateListData.pageNo}
            />
          )}
          {CateListData.cnt === 0 ? (
            <EmptyDiv message={"등록된 상품이 없습니다."} />
          ) : null}
          <PageBtn
            setPage={setPageParams}
            cnt={CateListData.cnt}
            page={pageParams}
          />
        </>
      )}
    </>
  );
};
export default ListPage;
