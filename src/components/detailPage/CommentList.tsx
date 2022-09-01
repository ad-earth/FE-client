import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

import Comment from "./Comment";
import { MainButton } from "../../elements/Buttons";
import ReviewModal from "../modal/reaviewModal/ReviewModal";
import { useState } from "react";

const CommentList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MainContainer>
      {modalOpen ? (
        <ReviewModal
          handleClose={() => setModalOpen(false)}
          isOpen={modalOpen}
        />
      ) : null}
      <p>상품을 구매하신 분들이 작성한 리뷰입니다.</p>
      <MainButton
        width={"120px"}
        radius={"20px"}
        hBgColor={"#23b85f"}
        fontSize={"12px"}
        onClick={() => setModalOpen(true)}
      >
        구매평 작성
      </MainButton>
      <CommentWrapper>
        <Comment />
        <Comment />
        <Comment />
      </CommentWrapper>
      <Page>
        <Pagination count={2} />
      </Page>
    </MainContainer>
  );
};

export default CommentList;

const MainContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  p {
    color: #646464;
    font-size: 13px;
    margin: 10px 0;
  }
`;
const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #333;
  margin-top: 30px;
`;
const Page = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
