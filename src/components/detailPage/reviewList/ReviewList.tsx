import * as t from "./reviewList.style";
import Pagination from "@mui/material/Pagination";
import { PropsType } from "./reviewList.type";
import { useAppDispatch } from "../../../redux/store";
import { setReviewPage } from "../../../redux/reducer/detailSlice";
import Review from "../review/Review";

const ReviewList = (props: PropsType) => {
  const dispatch = useAppDispatch();

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
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
            <Review review={review} />
          </t.CommentWrapper>
        ))}

        <t.Page>
          <Pagination
            count={Math.ceil(props?.reviewQty / 5)}
            onChange={handlePagination}
          />
        </t.Page>
      </t.List>
    </t.MainContainer>
  );
};

export default ReviewList;
