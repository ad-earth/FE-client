import styled from 'styled-components'

import { MainButton } from '../../elements/Buttons'
interface PropsType {
  BtnonClick: () => void
}

const PayUserInfo = (props: PropsType) => {
  return (
    <>
      <DivArea>
        <Div>
          <NameDiv>
            <span>이효리</span>
          </NameDiv>
          <PayText>01040774628</PayText>
        </Div>
        <ButtonBox>
          <MainButton
            color="#fff"
            hBgColor="#00913a"
            fontSize="13px"
            fontWeight="500"
            padding="6px 12px"
            radius="2px"
            width="50px"
            onClick={() => props.BtnonClick()}
          >
            수정
          </MainButton>
        </ButtonBox>
      </DivArea>
    </>
  )
}

export default PayUserInfo
const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
const NameDiv = styled.div`
  margin: 0 0 4 px;
  & span {
    width: 80px;
    font-size: ${({ theme }) => theme.fs15};
    color: ${({ theme }) => theme.fc13};
  }
`
const PayText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc08};
`
const ButtonBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`
