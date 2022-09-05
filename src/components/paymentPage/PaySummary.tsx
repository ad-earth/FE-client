import styled from 'styled-components'

const PaySummary = () => {
  return (
    <>
      <DivArea>
        <Div>
          <PayText>상품가격</PayText>
          <PayText>배송비</PayText>
        </Div>
        <ButtonBox>
          <PayText style={{ fontWeight: 'bold' }}>36,900원</PayText>
          <PayText style={{ fontWeight: 'bold' }}>+ 0원</PayText>
        </ButtonBox>
      </DivArea>
      <CountDiv>
        <Div>
          <CountText>총 주문 금액</CountText>
        </Div>
        <ButtonBox>
          <CountText style={{ color: '#00913A', fontWeight: 'bold' }}>
            36,900원
          </CountText>
        </ButtonBox>
      </CountDiv>
    </>
  )
}

export default PaySummary
const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
  padding-bottom: 10px;
`
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const PayText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc08};
  margin-bottom: 8px;
`
const CountDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-width: 1px 0 0 0;
`
const CountText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc09};
  margin-bottom: 8px;
`
const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`
