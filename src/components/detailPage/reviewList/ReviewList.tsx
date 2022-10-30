import Pagination from "@mui/material/Pagination";

import * as t from "./reviewList.style";
import Review from "../review/Review";
import { PropsType } from "./reviewList.type";
import { useAppDispatch } from "../../../redux/store";
import { setReviewPage } from "../../../redux/reducer/detailSlice";

const ReviewList = (props: PropsType) => {
  const dispatch = useAppDispatch();
  // 페이지네이션
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setReviewPage(value));
  };

  return (
    <t.MainContainer>
      <t.List>
        {props.reviewQty === 0 ? (
          <p>등록된 리뷰가 없습니다.</p>
        ) : (
          <p>상품을 구매하신 분들이 작성한 리뷰입니다.</p>
        )}

        {props.reviewList?.map((review) => (
          <t.CommentWrapper key={review.r_No}>
            <Review
              date={review.createdAt}
              review={review.r_Content}
              reviewNo={review.r_No}
              score={review.r_Score}
              user={review.u_Id}
            />
          </t.CommentWrapper>
        ))}

        <t.Page>
          <Pagination
            count={Math.ceil(props?.reviewQty / 5)}
            onChange={handlePage}
          />
        </t.Page>
      </t.List>
    </t.MainContainer>
  );
};

export default ReviewList;
