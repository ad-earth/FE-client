import styled from 'styled-components'

const CompleteTitle = () => {
  const completeText = '아래 계좌정보로 입금해 주시면\n 결제 완료처리가 됩니다'
  return (
    <>
      <Div>
        <H1tag>주문완료</H1tag>
        <H6tag>{completeText}</H6tag>
      </Div>
    </>
  )
}

export default CompleteTitle
const Div = styled.div`
  display: flex;
  flex-direction: column;
`
const H1tag = styled.h1`
  font-size: ${({ theme }) => theme.fs26};
  color: ${({ theme }) => theme.fc13};
  text-align: center;
  margin: 10px 0 0px;
  padding-top: 50px;
  font-weight: normal;
`
const H6tag = styled.h6`
  font-size: 20px;
  color: ${({ theme }) => theme.fc08};
  text-align: center;
  margin: 10px 0 10px;
  font-weight: bold;
  white-space: pre-wrap;
`
