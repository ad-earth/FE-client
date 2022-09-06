import * as t from './OrderPay.style'

import PayRadioBtn from '../../../components/paymentPage/payRadioBtn/PayRadioBtn'
import PaySummary from '../../../components/paymentPage/paySummary/PaySummary'
import PayAgree from '../../../components/paymentPage/payAgree/PayAgree'
import { MainButton } from '../../../elements/Buttons'

const OrderPay = () => {
  const titles = ['주문 요약', '결제수단']
  return (
    <t.PayArea>
      <t.TipOff>
        <t.OrderInfoDiv>{titles[0]}</t.OrderInfoDiv>
        <PaySummary />
      </t.TipOff>
      <t.TipOff>
        <t.OrderInfoDiv>{titles[1]}</t.OrderInfoDiv>
        <PayRadioBtn></PayRadioBtn>
      </t.TipOff>
      <t.TipOff style={{ display: 'rleative' }}>
        <PayAgree />
        <t.BtnDiv>
          <MainButton width="100%">결제하기</MainButton>
        </t.BtnDiv>
      </t.TipOff>
    </t.PayArea>
  )
}

export default OrderPay
