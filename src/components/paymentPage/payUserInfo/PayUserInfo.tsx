import * as t from './PayUserInfo.style'
import { MainButton } from '../../../elements/Buttons'

interface PropsType {
  BtnonClick: () => void
}

const PayUserInfo = (props: PropsType) => {
  return (
    <>
      <t.DivArea>
        <t.Div>
          <t.NameDiv>
            <span>이효리</span>
          </t.NameDiv>
          <t.PayText>01040774628</t.PayText>
        </t.Div>
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
            수정
          </MainButton>
        </t.ButtonBox>
      </t.DivArea>
    </>
  )
}

export default PayUserInfo
