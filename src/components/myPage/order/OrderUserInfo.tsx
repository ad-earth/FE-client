import styled from "styled-components";

const OrderUserInfo = () => {
  return (
    <OrderUserInfoBox>
      <Title>구매자 정보</Title>
      <Contents>
        <Item>
          <span>주문자</span>최수인
        </Item>
        <Item>
          <span>연락처</span>010-2222-2222
        </Item>
      </Contents>
    </OrderUserInfoBox>
  );
};

export default OrderUserInfo;

const OrderUserInfoBox = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  display: inline-block;
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;
const Contents = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  margin-bottom: 40px;
  padding: 20px;
  box-sizing: border-box;
`;
const Item = styled.p`
  color: ${({ theme }) => theme.fc14};
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  &:first-child {
    margin-top: 0;
  }
  & span {
    width: 80px;
    margin-right: 20px;
    color: ${({ theme }) => theme.fc09};
  }
`;
