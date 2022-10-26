import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import * as t from "./contents.style";
import CommentList from "../../../components/detailPage/commentList/CommentList";
import Description from "../../../components/detailPage/description/Description";
import { useGetCommentsQuery } from "./useGetCommentsQuery";
import { useAppSelector } from "../../../redux/store";

const Contents = () => {
  const { productNo } = useParams();
  const page = useAppSelector((state) => state.detailSlice.reviewPage);

  // 상세정보 & 구매평 스위치
  const [contentsChange, setContentsChange] = useState(false);

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
        <t.Menu onClick={() => setContentsChange(false)}>상세정보</t.Menu>
        <t.Menu onClick={() => setContentsChange(true)} className="right">
          구매평 ({reviewQty})
        </t.Menu>
      </t.MenuWrapper>
      <t.ContentsWrapper>
        {contentsChange ? (
          <CommentList reviewQty={reviewQty} reviewList={reviewList} />
        ) : (
          <Description />
        )}
      </t.ContentsWrapper>
    </t.MainContainer>
  );
};

export default Contents;
