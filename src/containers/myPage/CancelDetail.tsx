import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CancelInfo from "../../components/myPage/cancel/CancelInfo";
import CancelListDetail from "../../components/myPage/cancel/CancelListDetail";
import CancelAmount from "../../components/myPage/cancel/CancelAmount";

const CancelDetail = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Title>
        <span
          onClick={() => {
            navigate(-1);
          }}
        ></span>
        주문 취소요청
        <OrderNumber>202222020</OrderNumber>
      </Title>
      <Contents>
        <ContentsBox>
          <CancelInfo />
        </ContentsBox>
        <ContentsBox>
          <CancelListDetail />
          <CancelAmount />
        </ContentsBox>
      </Contents>
    </Section>
  );
};
export default CancelDetail;

const Section = styled.div`
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  & span {
    width: 30px;
    position: relative;
    height: 30px;
    display: inline-block;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 14px;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid #333;
      border-left: 1px solid #333;
    }
  }
  @media (max-width: 990px) {
    font-size: 18px;
    padding: 0 15px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    & span {
      width: 18px;
      height: 18px;
      :before {
        width: 10px;
        height: 10px;
        top: 50%;
      }
    }
  }
`;
const OrderNumber = styled.div`
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.green3};
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
const ContentsBox = styled.div`
  width: 50%;
  width: 100%;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 990px) {
    /* border: none; */
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    flex-direction: column;
  }
`;
