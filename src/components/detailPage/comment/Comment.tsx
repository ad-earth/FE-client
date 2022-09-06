import * as t from "./comment.style";

const Comment = () => {
  // 구매평 작성자 아이디 마스킹 처리(뒤 4자리)
  let username = "thisisusername";
  let length = username.length;
  let maskingUsername = username.substring(0, length - 4) + "****";

  return (
    <t.MainContainer>
      <t.CommentText>
        <t.StarWrapper>
          <t.IcStar />
          <t.IcStar />
          <t.IcStar />
          <t.IcStar />
          <t.IcStar />
        </t.StarWrapper>
        치카치카 너무 좋아요
      </t.CommentText>
      <t.WriterInfo>
        {maskingUsername}
        <br />
        2022-08-31 09:03
        <t.BtnWrapper>
          <button>수정</button> | <button>삭제</button>
        </t.BtnWrapper>
      </t.WriterInfo>
    </t.MainContainer>
  );
};

export default Comment;
