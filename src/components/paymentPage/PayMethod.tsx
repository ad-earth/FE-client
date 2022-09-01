import { MainButton } from '../../elements/Buttons'
import styled from 'styled-components'

const PayMethod = () => {
  return (
    <>
      <DivArea>
        <Div>
          <NameDiv>
            <span>이효리</span>
          </NameDiv>
          <PayText>01040774628</PayText>
          <PayText>서울 ㅇㅇ구 ㅇㅇ길 ㅇㅇㅇㅇ</PayText>
          <PayText>(09876)</PayText>
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
          >
            변경
          </MainButton>
        </ButtonBox>
      </DivArea>
      <ShipDiv>
        <PayText>베송메모</PayText>
        <BtnArea style={{ marginTop: '10px' }}>
          <DropBtn name="ship" id="-select" defaultValue={'first'}>
            <option value="first">배송메모를 선택해주세요.</option>
            <option value="second">배송 전에 미리 연락 바랍니다.</option>
            <option value="third">부재시 경비실에 맡겨주세요.</option>
            <option value="fourth">부재시 전화나 문자를 남겨주세요.</option>
          </DropBtn>
        </BtnArea>
      </ShipDiv>
    </>
  )
}

export default PayMethod
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
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray1};
  }
`
const PayText = styled.span`
  font-size: 14px;
  color: #757575;
`
const ShipDiv = styled.div`
  margin-top: 18px;
`
const ButtonBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`
const BtnArea = styled.div`
  flex: display;
  flex-direction: column;
  padding: 0 30px
  margin-bottom: 18px;
`
const DropBtn = styled.select`
  width: 100%;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  color: #646464;
  padding: 0.5em 0.75em;
  box-sizing: border-box;
  border: 1px solid rgba(33, 33, 33, 0.15);
  outline-color: #fff;
`
