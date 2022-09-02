import styled from "styled-components";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Comment = () => {
  // 구매평 작성자 아이디 마스킹 처리(뒤 4자리)
  let username = "thisisusername";
  let length = username.length;
  let maskingUsername = username.substring(0, length - 4) + "****";

  return (
    <MainContainer>
      <CommentText>
        <StarWrapper>
          <StarRoundedIcon sx={{ color: "#ff472b", fontSize: 18 }} />
          <StarRoundedIcon sx={{ color: "#ff472b", fontSize: 18 }} />
          <StarRoundedIcon sx={{ color: "#ff472b", fontSize: 18 }} />
          <StarRoundedIcon sx={{ color: "#ff472b", fontSize: 18 }} />
          <StarRoundedIcon sx={{ color: "#999", fontSize: 18 }} />
        </StarWrapper>
        치카치카 너무 좋아요
      </CommentText>
      <WriterInfo>
        {maskingUsername}
        <br />
        2022-08-31 09:03
        <BtnWrapper>
          <button>수정</button> | <button>삭제</button>
        </BtnWrapper>
      </WriterInfo>
    </MainContainer>
  );
};

export default Comment;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  color: #646464;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding: 15px 0;
  box-sizing: border-box;
`;
const CommentText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`;
const StarWrapper = styled.div`
  display: flex;
`;
const WriterInfo = styled.div`
  width: 17%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  gap: 5px;
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  button {
    padding: 0;
    border: 0;
    outline: none;
    background: #fff;
    cursor: pointer;
  }
`;