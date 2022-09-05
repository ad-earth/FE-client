import styled from "styled-components";
import { MainButton } from "../../../elements/Buttons";

const CancelInfo = () => {
  return (
    <>
      <Description>
        <p>
          주문하신 상품 단위로 취소요청이 가능합니다.(수량 부분취소 불가)
          <br />
          상품이 발송되기 전에 취소요청을 하실 수 있습니다.
        </p>
        <span>단, 상품을 이미 발송한 경우 취소처리가 거부될 수 있습니다.</span>
      </Description>
      <ButtomBox>
        <MainButton radius="50px">주문 취소</MainButton>
      </ButtomBox>
    </>
  );
};

export default CancelInfo;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  line-height: 20px;
  color: ${({ theme }) => theme.bg09};
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 40px;
  & p {
    padding-bottom: 10px;
  }
  & span {
    padding-top: 5px;
    color: ${({ theme }) => theme.fc19};
  }
  @media (max-width: 990px) {
    border: none;
    margin: 0;
  }
`;
const ButtomBox = styled.div`
  width: 100px;
  margin: 0 auto;
  @media (max-width: 990px) {
    display: none;
  }
`;
