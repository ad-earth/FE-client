import * as t from "./SearchBody.style";
import { useState } from "react";

import Card from "../../../components/card/Card";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import SearchCateDrop from "../../../components/searchPage/searchCateDrop/SearchCateDrop";
import SearchNav from "../../../components/searchPage/searchNav/SearchNav";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import { postLike } from "../../../shared/apis/api";
import { SearchType } from "./searchPage.type";

const SearchBody = (props: SearchType) => {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = async () => {
    const res = await postLike;
    setIsLike(!isLike);
  };
  return (
    <>
      {props.products && (
        <t.CardArea>
          <SearchNav />
          <SearchCateDrop cnt={props.cnt} />
          <t.CardWrap>
            {props.adProducts.map((v: any) => {
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
                        onClick={toggleLike}
                        pNo={v.p_No}
                        userLike={props.userLike}
                        pReview={v.p_Review}
                        pLike={v.p_Like}
                        isLike={isLike}
                      />
                    </div>
                  </t.CardCp>
                </>
              );
            })}
            {props.products.map((v: any) => {
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
                      <CardIcon
                        onClick={toggleLike}
                        pNo={v.p_No}
                        userLike={props.userLike}
                        pReview={v.p_Review}
                        pLike={v.p_Like}
                        isLike={isLike}
                      />
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
