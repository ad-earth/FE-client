import styled from "styled-components";
import useMobileMediaQuery from "../../../hook/useMobileMediaQuery";
import { MainButton } from "../../../elements/Buttons";


const CancelAmount = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <CancelAmountBox>
      <Title>환불 예정금액 </Title>
      <CancelList>
        <Content>
          <Item>
            <TitleText>취소상품 총 금액 합계</TitleText>
            <span>4,900원</span>
          </Item>
          <Item>
            <SubText>취소 상품 합계</SubText>
            <SubText>4,900원</SubText>
          </Item>
        </Content>
        <Content className="border">
          <Item>
            <TitleText>환불금액 차감내역</TitleText>
            <span>0원</span>
          </Item>
          <Item>
            <SubText>반품 </SubText>
            <SubText>0원</SubText>
          </Item>
          <p>
            취소 승인 이후 할인 및 배송비 추가 여부에 따라 취소 비용이 추가로
            청구될 수 있습니다.
          </p>
        </Content>
        <Content>
          <Item>
            <TitleText>환불 예정 금액</TitleText>
            <span className="green">4,900원</span>
          </Item>
        </Content>
      </CancelList>
      {isMobile && (
        <ButtomBox>
          <MainButton radius="50px">주문 취소</MainButton>
        </ButtomBox>
      )}
    </CancelAmountBox>
  );
};

export default CancelAmount;

const CancelAmountBox = styled.div`
  border: 1px solid  ${({ theme }) => theme.rgba06};
  padding: 20px 20px 80px;
  margin: 30px 0;
  @media (max-width: 990px) {
    border: none;
  }
`;
const Title = styled.div`
  font-size:  ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
`;
const CancelList = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 14px;
    color:  ${({ theme }) => theme.fc19};;
    padding-top: 10px;
  }
`;
const Content = styled.div`
  position: relative;
  padding: 20px 0;
  &.border {
    border-top: 1px solid ${({ theme }) => theme.ls03};
    border-bottom: 1px solid ${({ theme }) => theme.ls03};
    :before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid ${({ theme }) => theme.ls03};
      border-radius: 50%;
      background:  ${({ theme }) => theme.bg01};;
    }
    :after {
      content: "";
      width: 16px;
      height: 4px;
      position: absolute;
      top: 0;
      left: 50%;
      background: ${({ theme }) => theme.bg09};
      margin-left: -8px;
    }
  }
`;
const Item = styled.div`
  width: 100%;
  font-size:  ${({ theme }) => theme.fs15};
  display: flex;
  justify-content: space-between;
  & span {
    line-height: 30px;
  }
  & .green {
    font-weight: bold;
    color: ${({ theme }) => theme.fc15};
  }
`;
const SubText = styled.span`
  font-size:  ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc09};
`;
const TitleText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
`;
const ButtomBox = styled.div`
  margin-top: 40px;
`;
