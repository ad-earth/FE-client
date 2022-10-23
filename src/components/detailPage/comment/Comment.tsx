import * as t from "./comment.style";
import { PropsType } from "./comment.type";
import { useDeleteCommentQuery } from "./useDeleteCommentQuery";

const Comment = (props: PropsType) => {
  // 구매평 작성자 아이디 마스킹 처리(뒤 3자리)
  let length = props.user?.length;
  let maskingUsername = props.user.substring(0, length - 3) + "***";

  // 구매평 삭제
  const { mutate } = useDeleteCommentQuery(props.reviewNo);

  return (
    <t.MainContainer>
      <t.CommentText>
        <t.StarWrapper>
          {Array.from({ length: props.score }, (star, idx) => {
            return <t.IcStar key={idx} />;
          })}
        </t.StarWrapper>
        {props?.review}
      </t.CommentText>
      <t.WriterInfo>
        {maskingUsername}
        <br />
        {props?.date}
        <t.BtnWrapper>
          <button onClick={() => mutate}>삭제</button>
        </t.BtnWrapper>
      </t.WriterInfo>
    </t.MainContainer>
  );
};

export default Comment;
