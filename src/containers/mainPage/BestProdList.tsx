import styled from "styled-components";
import { theme } from "../../style/theme";

const BestProdList = () => {
  return (
    <BestContainer>
      <BestTitle>
        <span># BEST</span>
        <p>
          제로웨이스트 입문자도
          <br />
          어려움 없이 사용할 수 있는
          <br />
          베스트 제품!
        </p>
        <Image>
          <img src="https://cdn.imweb.me/thumbnail/20220304/3ae1ed5a06cf4.jpg" />
        </Image>
      </BestTitle>
      <BestCard>카드 들어갈 자리</BestCard>
    </BestContainer>
  );
};

export default BestProdList;

const BestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 70px;
  color: ${theme.colors.gray1};
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const BestTitle = styled.div`
  width: 28%;
  font-size: 16px;
  line-height: 1.5;
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
`;
const BestCard = styled.div`
  width: 50%;
  background: #e2e1e0;
`;
