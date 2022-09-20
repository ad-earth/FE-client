import * as t from "./SearchBody.style";
import { useNavigate } from "react-router-dom";

import Card from "../../../components/card/Card";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import SearchCateDrop from "../../../components/searchPage/searchCateDrop/SearchCateDrop";
import SearchNav from "../../../components/searchPage/searchNav/SearchNav";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import { useSearchDataList } from "./useSearchBody";

const SearchBody = () => {
  const SearchListData = useSearchDataList();
  console.log(SearchListData.userLike);
  const UserLike = () => {
    for (const i in SearchListData.userLike) {
      console.log(i);
    }
  };
  console.log(UserLike());

  return (
    <>
      {SearchListData.products && (
        <t.CardArea>
          <SearchNav />
          <SearchCateDrop cnt={SearchListData.cnt} />
          <t.CardWrap>
            {SearchListData.adProducts.map((v: any) => {
              return (
                <>
                  <t.CardCp key={v.p_No}>
                    <Card
                      pNo={v.p_No}
                      pThumbnail={v.p_Thumbnail}
                      type={(v.type = "ad")}
                      aBrand={v.a_Brand}
                      pName={v.p_Name}
                      pCost={v.p_Cost}
                      pSale={v.p_Sale}
                      pDiscount={v.p_Discount}
                      pOption={v.p_Option}
                      pNew={v.p_New}
                      pBest={v.p_Best}
                      pSoldOut={v.p_Soldout}
                    />
                    <CardBadge
                      pNew={v.p_New}
                      pBest={v.p_Best}
                      pSoldOut={v.p_Soldout}
                      pSale={v.p_Sale}
                    />
                    <div>
                      <CardIcon
                        pNo={v.p_No}
                        pReview={v.p_Review}
                        pLike={v.p_Like}
                        userLike={UserLike()}
                      />
                    </div>
                  </t.CardCp>
                </>
              );
            })}
            {SearchListData.products.map((v: any) => {
              return (
                <>
                  <t.CardCp key={v.p_Name}>
                    <Card
                      pNo={v.p_No}
                      pThumbnail={v.p_Thumbnail}
                      aBrand={v.a_Brand}
                      pName={v.p_Name}
                      pCost={v.p_Cost}
                      pSale={v.p_Sale}
                      pDiscount={v.p_Discount}
                      pOption={v.p_Option}
                      pNew={v.p_New}
                      pBest={v.p_Best}
                      pSoldOut={v.p_Soldout}
                    />
                    <CardBadge
                      pNew={v.p_New}
                      pBest={v.p_Best}
                      pSoldOut={v.p_Soldout}
                      pSale={v.p_Sale}
                    />
                    <div>
                      <CardIcon pReview={v.p_Review} pLike={v.p_Like} />
                    </div>
                  </t.CardCp>
                </>
              );
            })}
          </t.CardWrap>
        </t.CardArea>
      )}
    </>
  );
};

export default SearchBody;
