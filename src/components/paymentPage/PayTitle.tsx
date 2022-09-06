import styled from 'styled-components'

const PayTitle = () => {
  return <H1tag>결제하기</H1tag>
}

export default PayTitle

const H1tag = styled.h1`
  font-size: ${({ theme }) => theme.fs28};
  color: ${({ theme }) => theme.fc13};
  text-align: center;
  margin: 60px 0;
  font-weight: bold;
`
