import * as t from "./searchBody.style";
import { SProductsType, SearchType } from "./searchPage.type";
import Card from "../../../components/card/Card";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import { SearchNav } from "../../../components/searchPage/searchNav/SearchNav";
import SearchCateDrop from "../../../components/searchPage/searchCateDrop/SearchCateDrop";

const SearchBody = (props: SearchType) => {
  return (
    <>
      {props.products && (
        <t.CardArea>
          <SearchNav />
          <SearchCateDrop cnt={props.cnt} />
          <t.CardWrap>
            {props.adProducts.map((v: SProductsType, i: number) => {
              return (
                <>
                  <t.CardCp key={i}>
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
                      <CardIcon val={v} userLike={props.userLike} />
                    </div>
                  </t.CardCp>
                </>
              );
            })}
            {props.products.map((v: SProductsType) => {
              return (
                <>
                  <t.CardCp key={v.p_No}>
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
                      <CardIcon val={v} userLike={props.userLike} />
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
