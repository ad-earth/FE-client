import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import * as t from "./contents.style";
import ReviewList from "../../../components/detailPage/reviewList/ReviewList";
import Description from "../../../components/detailPage/description/Description";
import { useGetCommentsQuery } from "./useGetCommentsQuery";
import { useAppSelector } from "../../../redux/store";

const Contents = () => {
  const { productNo } = useParams();
  const page = useAppSelector((state) => state.detailSlice.reviewPage);

  const [menuSwitch, setMenuSwitch] = useState(false);

  const data = useGetCommentsQuery(productNo, page);
  const { reviewQty, reviewList } = useMemo(
    () => ({
      reviewQty: data.data?.data.p_review,
      reviewList: data.data?.data.reviews,
    }),
    [data]
  );
  return (
    <t.MainContainer>
      <t.MenuWrapper>
        <t.Menu onClick={() => setMenuSwitch(false)}>상세정보</t.Menu>
        <t.Menu onClick={() => setMenuSwitch(true)} className="right">
          구매평 ({reviewQty})
        </t.Menu>
      </t.MenuWrapper>
      <t.ContentsWrapper>
        {menuSwitch ? (
          <ReviewList reviewQty={reviewQty} reviewList={reviewList} />
        ) : (
          <Description />
        )}
      </t.ContentsWrapper>
    </t.MainContainer>
  );
};

export default Contents;
