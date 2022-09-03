import styled from "styled-components";

const CancelAmount = () => {
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
    </CancelAmountBox>
  );
};

export default CancelAmount;

const CancelAmountBox = styled.div`
  border: 1px solid rgba(100, 100, 100, 0.1);
  padding: 20px 20px 80px;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
`;
const CancelList = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    padding-top: 10px;
    font-size: 14px;
    color: red;
  }
`;
const Content = styled.div`
  padding: 20px 0;
  position: relative;
  &.border {
    border-top: 1px solid ${({ theme }) => theme.colors.gray3};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
    :before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      left: 50%;
      top: -15px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray3};
      transform: translateX(-50%);
    }
    :after {
      content: "";
      width: 16px;
      height: 4px;
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -8px;
      background: ${({ theme }) => theme.colors.gray2};
    }
  }
`;
const Item = styled.div`
  width: 100%;
  /* background: aquamarine; */
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  & span {
    line-height: 30px;
  }
  & .green {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green2};
  }
`;

const SubText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray1};
`;
const TitleText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
const TotalText = styled.div`
  font-size: 14px;
`;
