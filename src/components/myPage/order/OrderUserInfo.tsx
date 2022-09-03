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
  font-size: 18px;
  color: #212121;
  display: inline-block;

  margin-bottom: 16px;
  font-weight: bold;
`;
const Contents = styled.div`
  border: 1px solid rgba(100, 100, 100, 0.1);
  padding: 20px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;
const Item = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: flex-start;
  &:first-child {
    margin-top: 0;
  }
  & span {
    width: 80px;
    margin-right: 20px;
    color: ${({ theme }) => theme.fc09};
  }
`;
