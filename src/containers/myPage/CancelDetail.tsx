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
            navigate("..");
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
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & span {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid ${({ theme }) => theme.ls13};
      border-left: 1px solid ${({ theme }) => theme.ls13};
    }
  }
  @media (max-width: 990px) {
    font-size: ${({ theme }) => theme.fs18};
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    padding: 0 15px 15px;
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
  color: ${({ theme }) => theme.fc21};
  padding-left: 10px;
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
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    flex-direction: column;
    margin: 0;
  }
`;
