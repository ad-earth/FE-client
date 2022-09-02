import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../elements/Input'
import { DropBtn } from './PayMethod'

const PayRadioBtn = () => {
  const [select, setSelect] = useState('optionA')

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelect(value)
  }
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="payment"
          value="bankbook"
          checked={select === 'bankbook'}
          onChange={(e) => handleSelectChange(e)}
        />
        <RadioButtonLabel />
        <Text>무통장입금</Text>
      </Item>
      <DropBtn
        style={{ fontSize: '14px' }}
        name="payment"
        id="-select"
        defaultValue={'first'}
      >
        <option value="first">지구은행 12309812 (주)광고지구</option>
      </DropBtn>
      <Input
        fontSize="14px"
        holderName={'입금자명 (미입력시 주문자명)'}
        marginTop="10px"
      />
      <LineDiv>
        <PayText>주문 후 24시간동안 미입금시 자동취소됩니다.</PayText>
      </LineDiv>

      <Item style={{ margin: '15px 0 20px' }}>
        <CheckBtn type="checkbox" />
        <Text>현금영수증 신청</Text>
      </Item>
      <div style={{ display: 'flex' }}>
        <Item>
          <RadioButton
            type="radio"
            name="paycheck"
            value="paycheck1"
            checked={select === 'paycheck1'}
            onChange={(e) => handleSelectChange(e)}
          />
          <RadioButtonLabel />
          <Text>소득공제용</Text>
        </Item>
        <Item style={{ marginLeft: '30px' }}>
          <RadioButton
            type="radio"
            name="paycheck"
            value="paycheck2"
            checked={select === 'paycheck2'}
            onChange={(e) => handleSelectChange(e)}
          />
          <RadioButtonLabel />
          <Text>지출증빙용</Text>
        </Item>
      </div>
      <Input
        fontSize="14px"
        holderName={'휴대전화번호 입력'}
        marginTop="10px"
      />
    </Wrapper>
  )
}
export default PayRadioBtn
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #fff;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1px;
      height: 1px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #00913A;
      border: 1px solid #00913A;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: 5px;
        background: white;
      }
    }
  `}
`
const Text = styled.span`
  font-size: 14px;
  color: #20252b;
`
const PayText = styled.div`
  font-size: 13px;
  color: #757575;
  margin-top: 8px;
`
const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #00913a;
  margin: 0px 8px 0 0px;
  border: 1px solid #cfd6d9;
`
const LineDiv = styled.div`
  width: 100%;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
  padding: 5px 0 25px;
`
