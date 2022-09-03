import styled from "styled-components";

import { theme } from "../../style/theme";

const DeliveryInfo = () => {
  return (
    <MainContainer>
      <Title>배송정보</Title>
      <img src="https://cdn.imweb.me/upload/S202001038f7af028ec26d/28bb2a4647f30.jpg" />
      <p>
        - 모든 제품의 배송은 Plastic Free 원칙으로 종이재질로 발송됩니다.
        (종이박스, 종이완충재, 종이테이프)
        <br />
        - 수령하신 택배박스는 운송장을 제거한 후 종이로 분리배출 해주세요.
        <br />
        - 결제완료 후 제품을 수령하시기까지 약 2-5일 소요됩니다.
        <br />- 배송이 늦어지거나 일부 제품이 품절인 경우 개별적으로 연락을
        드리겠습니다.
      </p>
    </MainContainer>
  );
};

export default DeliveryInfo;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${theme.fc09};
  font-size: ${theme.fs15};
  p {
    line-height: 25px;
  }
`;
const Title = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 0.5px solid ${theme.ls08};
`;
