import * as t from "./SearchBody.style";

import Card from "../../../components/card/Card";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import SearchCateDrop from "../../../components/searchPage/searchCateDrop/SearchCateDrop";
import SearchNav from "../../../components/searchPage/searchNav/SearchNav";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import { useDataList, useAdData } from "./useSearchBody";
import { useNavigate } from "react-router-dom";

const SearchBody = () => {
  const navigate = useNavigate();
  const SearchListData = useDataList();
  const SearchAdData = useAdData();

  return (
    <>
      <t.CardArea>
        <SearchNav />
        <SearchCateDrop />
        <t.CardWrap>
          {SearchAdData.map((v: any) => {
            return (
              <>
                <t.CardCp
                  key={v.p_No}
                  onClick={() => navigate(`/detail/main/${v.p_No}`)}
                >
                  <Card
                    p_Thumbnail={v.p_Thumbnail}
                    type={(v.type = "ad")}
                    a_Brand={v.a_Brand}
                    p_Name={v.p_Name}
                    p_Cost={v.p_Cost}
                    p_Sale={v.p_Sale}
                    p_Discount={v.p_Discount}
                    p_Option={v.p_Option}
                    p_New={v.p_New}
                    p_Best={v.p_Best}
                    p_Soldout={v.p_Soldout}
                  />
                  <CardBadge
                    p_New={v.p_New}
                    p_Best={v.p_Best}
                    p_Soldout={v.p_Soldout}
                  />
                  <div>
                    <CardIcon p_Review={v.p_Review} p_Like={v.p_Like} />
                  </div>
                </t.CardCp>
              </>
            );
          })}
          {SearchListData.map((v: any) => {
            return (
              <>
                <t.CardCp
                  key={v.p_Name}
                  onClick={() => navigate(`/detail/main/${v.p_No}`)}
                >
                  <Card
                    p_Thumbnail={v.p_Thumbnail}
                    a_Brand={v.a_Brand}
                    p_Name={v.p_Name}
                    p_Cost={v.p_Cost}
                    p_Sale={v.p_Sale}
                    p_Discount={v.p_Discount}
                    p_Option={v.p_Option}
                    p_New={v.p_New}
                    p_Best={v.p_Best}
                    p_Soldout={v.p_Soldout}
                  />
                  <CardBadge
                    p_New={v.p_New}
                    p_Best={v.p_Best}
                    p_Soldout={v.p_Soldout}
                  />
                  <div>
                    <CardIcon p_Review={v.p_Review} p_Like={v.p_Like} />
                  </div>
                </t.CardCp>
              </>
            );
          })}
        </t.CardWrap>
      </t.CardArea>
    </>
  );
};

export default SearchBody;
