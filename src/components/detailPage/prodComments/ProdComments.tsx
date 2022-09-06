import styled from "styled-components";

import CommentList from "../commentList/CommentList";

const ProdComments = () => {
  return (
    <MainContainer>
      <CommentList />
    </MainContainer>
  );
};

export default ProdComments;

const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
