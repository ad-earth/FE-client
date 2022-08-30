import styled from "styled-components";

import { theme } from "../../style/theme";
import BestCards from "../../components/mainPage/BestCards";

const BestProdList = () => {
  return (
    <MainContainer>
      <TitleWrapper>
        <Title>
          <span>#BEST</span>
          <p>
            제로 웨이스트 입문자도
            <br />
            어려움 없이 사용할 수 있는
            <br />
            베스트 제품!
          </p>
        </Title>
        <Image>
          <img src="https://cdn.imweb.me/thumbnail/20220304/3ae1ed5a06cf4.jpg" />
        </Image>
      </TitleWrapper>
      <BestCards />
    </MainContainer>
  );
};

export default BestProdList;

const MainContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.gray1};
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
  font-size: 16px;
  line-height: 1.5;
  @media (max-width: 990px) {
    width: 98%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    font-size: 14px;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 990px) {
    span {
      font-size: 15px;
    }
  }
`;
const Image = styled.div`
  display: flex;
  width: 100%;
  border-radius: 500px;
  margin-top: 30px;
  overflow: hidden;
  img {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 50%;
  }
`;
