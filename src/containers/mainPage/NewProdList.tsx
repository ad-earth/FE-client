import styled from "styled-components";

import NewCarousel from "../../components/mainPage/NewCarousel";
import { theme } from "../../style/theme";

const NewProdList = () => {
  return (
    <NewContainer>
      <NewTitle>
        <span># NEW</span>
        <p>
          지구샵만의 꼼꼼한 기준으로 입고된
          <br />
          새로운 제로웨이스트 제품을 만나보세요!
        </p>
      </NewTitle>
      <NewCarousel />
    </NewContainer>
  );
};

export default NewProdList;

const NewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  /* gap: 70px; */
  color: ${theme.colors.gray1};
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const NewTitle = styled.div`
  width: 28%;
  font-size: 16px;
  line-height: 1.5;
`;
