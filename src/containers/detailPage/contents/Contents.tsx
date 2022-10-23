import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import * as t from "./contents.style";
import CommentList from "../../../components/detailPage/commentList/CommentList";
import Description from "../../../components/detailPage/description/Description";
import { useGetCommentsQuery } from "./useGetCommentsQuery";
import { useContentsQuery } from "./useContentsQuery";

const Contents = () => {
  const { productNo } = useParams();
  const [page, setPage] = useState<number>(1);

  // 상세정보 & 구매평 스위치
  const [contentsChange, setContentsChange] = useState(false);

  const contents = useContentsQuery(productNo);

  const data = useGetCommentsQuery(productNo, page);
  const { reviewQty, reviewList, content } = useMemo(
    () => ({
      reviewQty: data.data?.data.p_review,
      reviewList: data.data?.data.reviews,
      content: contents.data?.data.product.p_Content,
    }),
    [data, contents]
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
          <CommentList
            setPage={setPage}
            reviewQty={reviewQty}
            reviewList={reviewList}
          />
        ) : (
          <Description content={content} />
        )}
      </t.ContentsWrapper>
    </t.MainContainer>
  );
};

export default Contents;
