import { useState } from "react";
import { useParams } from "react-router-dom";

import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";
import { useCardList } from "../containers/listPage/cardList/useCardList";
import { CardListType } from "../containers/listPage/cardList/cardList.type";

export const ListPage = () => {
  const { sort } = useParams<{ sort: string }>();
  const [sortParams, setSortParams] = useState<string>("");

  const { pageNo } = useParams<{ pageNo: string }>();
  const [pageParams, setPageParams] = useState<string>(pageNo ? pageNo : `1`);

  const CardListData: CardListType = useCardList(sortParams, pageParams);

  return (
    <>
      {CardListData && (
        <>
          <CateButton />
          <CardList
            products={CardListData.products}
            userLike={CardListData.userLike}
            cnt={CardListData.cnt}
            pageNo={CardListData.pageNo}
          />
          <PageBtn />
        </>
      )}
    </>
  );
};
export default ListPage;
