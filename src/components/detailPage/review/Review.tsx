import * as t from "./review.style";
import { PropsType } from "./review.type";
import { useDelReviewQuery } from "./useDelReviewQuery";

const Review = (props: PropsType) => {
  console.log(props);
  let usernameLength = props.review?.u_Id.length;
  let maskingUsername =
    props.review?.u_Id.substring(0, usernameLength - 3) + "***";

  const { mutate } = useDelReviewQuery(props.review?.r_No);

  return (
    <t.MainContainer>
      <t.CommentText>
        <t.StarWrapper>
          {Array.from({ length: props.review?.r_Score }, (star, idx) => (
            <t.IcStar key={idx} />
          ))}
        </t.StarWrapper>
        {props.review?.r_Content}
      </t.CommentText>
      <t.WriterInfo>
        {maskingUsername}
        <br />
        {props.review?.createdAt}
        <t.BtnWrapper>
          <button onClick={() => mutate}>삭제</button>
        </t.BtnWrapper>
      </t.WriterInfo>
    </t.MainContainer>
  );
};

export default Review;
