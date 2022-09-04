import styled from "styled-components";

const OrderAddress = () => {
  return (
    <div>
      <OrderAddressBox>
        <Title>배송지 정보</Title>
        <Contents>
          <Item>
            <span>수령인</span>최수인
          </Item>
          <Item>
            <span>연락처</span>010-2222-2222
          </Item>
          <Item>
            <span>배송지</span>
            <div>대구광역시 달서구 장기로 145</div>
          </Item>
          <Item>
            <span>베송메모</span>젠장!!!!
          </Item>
        </Contents>
      </OrderAddressBox>
    </div>
  );
};

export default OrderAddress;

const OrderAddressBox = styled.div`
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
const Item = styled.div`
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
