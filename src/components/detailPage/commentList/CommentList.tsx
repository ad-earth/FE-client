import { useState } from "react";
import Pagination from "@mui/material/Pagination";

import * as t from "./commentList.style";
import { theme } from "../../../style/theme";
import Comment from "../comment/Comment";
import { MainButton } from "../../../elements/Buttons";
import ReviewModal from "../../modal/reviewModal/ReviewModal";

const CommentList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <t.MainContainer>
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
        hBgColor={theme.bg15}
        fontSize={theme.fs12}
        onClick={() => setModalOpen(true)}
      >
        구매평 작성
      </MainButton>
      <t.CommentWrapper>
        <Comment />
        <Comment />
        <Comment />
      </t.CommentWrapper>
      <t.Page>
        <Pagination count={2} />
      </t.Page>
    </t.MainContainer>
  );
};

export default CommentList;
