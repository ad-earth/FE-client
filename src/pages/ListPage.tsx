import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";
import { useCateList } from "../containers/listPage/cardList/useCardList";
import { CardListType } from "../containers/listPage/cardList/cardList.type";

export const ListPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortParams, setSortParams] = useState<string>("recent");
  const [pageParams, setPageParams] = useState<number>(1);

  //카테고리 api 호출
  const CateListData: CardListType = useCateList(
    category,
    sortParams,
    String(pageParams)
  );
  console.log(CateListData);

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortParams(e.target.value);
  };
  return (
    <>
      {CateListData && (
        <>
          <CateButton />
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
          <PageBtn setPage={setPageParams} cnt={CateListData.cnt} />
        </>
      )}
    </>
  );
};
export default ListPage;
