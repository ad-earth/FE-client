import styled from "styled-components";

import { theme } from "../../style/theme";

const ProdDesc = () => {
  return (
    <ProdDescContainer>
      <p>
        더 상쾌한 제로웨이스트 양치시간! 지구샵 스트롱 고체치약으로 시작해요:)
      </p>
      <p>*틴케이스 별도 구매</p>
      <Description>
        <span>원산지</span>&ensp; 대한민국 <br />
        <span>브랜드</span>&ensp; 지구샵 <br />
        <span>배송비</span>&ensp; 전 품목 무료배송 <br />
      </Description>
    </ProdDescContainer>
  );
};

export default ProdDesc;

const ProdDescContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  p {
    color: ${theme.colors.gray1};
    font-size: 15px;
    line-height: 0.5;
  }
`;
const Description = styled.div`
  margin-top: 40px;
  color: ${theme.colors.gray1};
  font-size: 13px;
  line-height: 1.5;
  span {
    font-weight: 600;
  }
`;
