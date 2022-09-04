import { useState } from 'react'
import styled from 'styled-components'
import { NewPayInput } from './NewPayInput'
import { PayMethodInfo, PayMethodSelect } from './PayMethod'
import { RadioBtn } from './PayRadioBtn'
import { RadiobtnType } from './PayRadioBtn'

const PayMethodInput = (props: RadiobtnType) => {
  const [tab, setTab] = useState(false)
  return (
    <DivArea>
      <TbtnDiv>
        <Tbtn onClick={() => setTab(false)} bgColor="#bebebe">
          배송지 선택
        </Tbtn>
        <Tbtn onClick={() => setTab(true)}>신규입력</Tbtn>
      </TbtnDiv>
      <ContentsDiv>
        {tab ? (
          <>
            <NewPayInput />
          </>
        ) : (
          <>
            <DivArea style={{ marginTop: '10px' }}>
              <Div>
                <RadioBtn
                  type="radio"
                  checked={true}
                  select={props.checked}
                  top="5%"
                />
                <PayMethodInfo />
              </Div>
              <PayMethodSelect />
            </DivArea>
          </>
        )}
      </ContentsDiv>
    </DivArea>
  )
}

export default PayMethodInput

const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const TbtnDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e7ebbb;
  display: flex;
`
const Tbtn = styled.div<RadiobtnType>`
  width: 25%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')}
  color: #20252b;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 9px 5px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #e5e7ebbb;
  &.right {
    border-left: 1px solid #e5e7ebbb;
  }
`
const ContentsDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e7ebbb;
`
