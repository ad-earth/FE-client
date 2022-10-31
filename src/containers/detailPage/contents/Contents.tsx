import * as t from "./contents.style";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import { useGetReviewsQuery } from "./useGetReviewsQuery";
import ReviewList from "../../../components/detailPage/reviewList/ReviewList";
import Description from "../../../components/detailPage/description/Description";

const Contents = () => {
  const { productNo } = useParams();
  const pageData = useAppSelector((state) => state.detailSlice.reviewPage);

  const [menuSwitch, setMenuSwitch] = useState<boolean>(false);

  const reviewQuery = useGetReviewsQuery(productNo, pageData);
  const { reviewQty, reviewList } = useMemo(
    () => ({
      reviewQty: reviewQuery.data?.data.p_review,
      reviewList: reviewQuery.data?.data.reviews,
    }),
    [reviewQuery]
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
