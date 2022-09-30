import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";
import {
  useCardList,
  useCateList,
} from "../containers/listPage/cardList/useCardList";
import { CardListType } from "../containers/listPage/cardList/cardList.type";
import { values } from "lodash";

export const ListPage = () => {
  const navigate = useNavigate();
  const [cateParams, setCateParams] = useState<string>();
  const { category } = useParams<{ category: string }>();

  const { sort } = useParams<{ sort: string }>();
  const [sortParams, setSortParams] = useState<string>();

  const { pageNo } = useParams<{ pageNo: string }>();
  const [pageParams, setPageParams] = useState<string>(pageNo ? pageNo : `1`);

  const [cateOpen, setCateOpen] = useState(false);
  const CardListData: CardListType = useCardList(sortParams, pageParams);
  const CateListData: CardListType = useCateList(
    category,
    sortParams,
    pageParams
  );
  // console.log("CATE", CateListData);
  console.log("CARD", CardListData);

  const SortClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortParams(e.target.value);
    const categoty = cateParams;
    console.log(category);
  };
  const CateClick = (e: any) => {
    setCateParams(e.target.value);
    console.log(cateParams);
    const category = e.target.value;
    navigate(`/list/${category}`);
  };
  return (
    <>
      {CateListData && (
        <>
          <CateButton
            // cateClick={CateClick}
            cate={cateParams}
            // c={setCateParams}
          />
          {CateListData.cnt === 0 ? null : (
            <CardList
              sortClick={SortClick}
              sort={sortParams}
              products={CardListData.products}
              userLike={CardListData.userLike}
              cnt={CardListData.cnt}
              pageNo={CardListData.pageNo}
            />
          )}
          <PageBtn />
        </>
      )}
    </>
  );
};
export default ListPage;

// const value = [listsort.selectedIndex].value;
// setSortParams(value);
// console.log(value);
