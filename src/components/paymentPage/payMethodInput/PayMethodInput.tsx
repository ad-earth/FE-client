import { useState } from 'react'
import { NewPayInput } from '../newPayInput/NewPayInput'
import { PayMethodInfo, PayMethodSelect } from '../payMethod/PayMethod'
import { RadioBtn } from '../PayRadioBtn'
import { RadiobtnType } from '../PayRadioBtn'

import * as t from './PayMethodInput.style'

const PayMethodInput = (props: RadiobtnType) => {
  const [tab, setTab] = useState(false)
  return (
    <t.DivArea>
      <t.TbtnDiv>
        <t.Tbtn onClick={() => setTab(false)} bgColor="#bebebe">
          배송지 선택
        </t.Tbtn>
        <t.Tbtn onClick={() => setTab(true)}>신규입력</t.Tbtn>
      </t.TbtnDiv>
      <t.ContentsDiv>
        {tab ? (
          <>
            <NewPayInput />
          </>
        ) : (
          <>
            <t.DivArea style={{ marginTop: '10px' }}>
              <t.Div>
                <RadioBtn
                  type="radio"
                  checked={true}
                  select={props.checked}
                  top="5%"
                />
                <PayMethodInfo />
              </t.Div>
              <PayMethodSelect />
            </t.DivArea>
          </>
        )}
      </t.ContentsDiv>
    </t.DivArea>
  )
}

export default PayMethodInput
