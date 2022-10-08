import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";
import {
  useCardList,
  useCateList,
} from "../containers/listPage/cardList/useCardList";
import { CardListType } from "../containers/listPage/cardList/cardList.type";

export const ListPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortParams, setSortParams] = useState<string>(null);
  const [pageParams, setPageParams] = useState<number>(1);
  //카드리스트 api 호출
  const CardListData: CardListType = useCardList(
    sortParams,
    String(pageParams)
  );
  //카테고리 api 호출
  const CateListData: CardListType = useCateList(
    category,
    sortParams,
    String(pageParams)
  );

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortParams(e.target.value);
  };
  return (
    <>
      {CateListData && (
        <>
          <CateButton />
          {CateListData.cnt === 0 ? null : (
            <CardList
              sortChange={sortChange}
              sort={sortParams}
              products={CardListData.products}
              userLike={CardListData.userLike}
              cnt={CardListData.cnt}
              pageNo={CardListData.pageNo}
            />
          )}
          <PageBtn setPage={setPageParams} cnt={CardListData.cnt} />
        </>
      )}
    </>
  );
};
export default ListPage;
