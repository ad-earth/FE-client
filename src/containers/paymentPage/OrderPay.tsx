import React from 'react'
import styled from 'styled-components'
import PayRadioBtn from '../../components/paymentPage/PayRadioBtn'
import PaySummary from '../../components/paymentPage/PaySummary'
import { OrderInfoDiv } from './OrderPList'
import PayAgree from '../../components/paymentPage/PayAgree'

const OrderPay = () => {
  const titles = ['주문 요약', '결제수단']
  return (
    <PayArea>
      <TipOff>
        <OrderInfoDiv>{titles[0]}</OrderInfoDiv>
        <PaySummary />
      </TipOff>
      <TipOff>
        <OrderInfoDiv>{titles[1]}</OrderInfoDiv>
        <PayRadioBtn></PayRadioBtn>
      </TipOff>
      <TipOff>
        <PayAgree />
      </TipOff>
    </PayArea>
  )
}

export default OrderPay

const PayArea = styled.div`
  margin-left: 16px;
  width: 450px;
  visibility: visible;
  float: right;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: flex-end;
`
const TipOff = styled.div`
  width: 79%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: #fff;
  flex-direction: column;
`
