import styled from "styled-components";

import { theme } from "../../style/theme";
import NewCarousel from "../../components/mainPage/NewCarousel";

const NewProdList = () => {
  return (
    <MainContainer>
      <TitleWrapper>
        <Title>
          <span>#NEW</span>
          <p>
            지구샵만의 꼼꼼한 기준으로 입고된
            <br />
            새로운 제로웨이스트 제품을 만나보세요!
          </p>
        </Title>
      </TitleWrapper>
      <NewCarousel />
    </MainContainer>
  );
};

export default NewProdList;

const MainContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  color: ${theme.fc09};
  width: 1200px;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
  }
`;
const TitleWrapper = styled.div`
  width: 32%;
  margin-left: 2%;
  font-size: ${theme.fs16};
  line-height: 1.5;
  @media (max-width: 990px) {
    width: 98%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    font-size: ${theme.fs14};
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: ${theme.fs20};
    font-weight: 700;
  }
  @media (max-width: 990px) {
    span {
      font-size: ${theme.fs15};
    }
  }
`;
