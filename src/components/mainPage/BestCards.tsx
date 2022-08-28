import styled from "styled-components";

const BestCards = () => {
  return <MainContainer>카드 컴포넌트 들어가는 곳</MainContainer>;
};

export default BestCards;

const MainContainer = styled.div`
  width: 55%;
  margin-left: 9%;
  background: #eee;
  @media (max-width: 990px) {
    width: 98%;
    margin: 30px auto;
  }
`;
