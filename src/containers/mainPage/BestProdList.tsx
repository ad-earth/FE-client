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
        <section></section>
      </BestTitle>
      <BestCard>카드 들어갈 자리</BestCard>
    </BestContainer>
  );
};

export default BestProdList;
const BestContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  color: ${theme.colors.gray1};
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const BestTitle = styled.div`
  width: 40%;
  font-size: 16px;
  line-height: 1.5;
  section {
    width: 390px;
    height: 390px;
    border-radius: 200px;
    margin-top: 30px;
    background: lightblue;
  }
`;
const BestCard = styled.div`
  width: 60%;
  background: orange;
`;
