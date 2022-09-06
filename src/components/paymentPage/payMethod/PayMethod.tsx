import * as t from './PayMethod.style'
import { MainButton } from '../../../elements/Buttons'

interface PropsType {
  BtnonClick: () => void
}

export const PayMethod = (props: PropsType) => {
  return (
    <>
      <t.DivArea>
        <PayMethodInfo />
        <t.ButtonBox>
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
            변경
          </MainButton>
        </t.ButtonBox>
      </t.DivArea>
      <PayMethodSelect />
    </>
  )
}

export const PayMethodInfo = () => {
  return (
    <t.Div>
      <t.NameDiv>
        <span>이효리</span>
      </t.NameDiv>
      <t.PayText>01040774628</t.PayText>
      <t.PayText>서울 ㅇㅇ구 ㅇㅇ길 ㅇㅇㅇㅇ</t.PayText>
      <t.PayText>(09876)</t.PayText>
    </t.Div>
  )
}

export const PayMethodSelect = () => {
  return (
    <t.ShipDiv>
      <t.PayText>배송메모</t.PayText>
      <t.BtnArea style={{ marginTop: '10px' }}>
        <t.DropBtn name="ship" id="-select" defaultValue={'first'}>
          <option value="first">배송메모를 선택해주세요.</option>
          <option value="second">배송 전에 미리 연락 바랍니다.</option>
          <option value="third">부재시 경비실에 맡겨주세요.</option>
          <option value="fourth">부재시 전화나 문자를 남겨주세요.</option>
        </t.DropBtn>
      </t.BtnArea>
    </t.ShipDiv>
  )
}
export default PayMethod
