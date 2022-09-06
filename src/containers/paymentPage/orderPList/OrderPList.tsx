import * as t from './OrderPList.style'
import { useState } from 'react'
//pages//
import { FreeShipping } from '../../../components/paymentPage/orderPdtInfo/OrderPdtInfo'
import PdtInfo from '../../../components/paymentPage/pdtInfo/PdtInfo'
import PayMethod from '../../../components/paymentPage/payMethod/PayMethod'
import PayUserInfo from '../../../components/paymentPage/payUserInfo/PayUserInfo'
import PayUserInput from '../../../components/paymentPage/payUserInput/PayUserInput'
import PayMethodInput from '../../../components/paymentPage/payMethodInput/PayMethodInput'

const OrderPList = () => {
  const titles = ['주문 상품 정보', '주문자 정보', '배송 정보']
  const [btnopen, setBtnopen] = useState<boolean>(false)
  const [btnchange, setBtnchange] = useState<boolean>(false)
  return (
    <>
      <t.PListArea>
        <t.TipOff>
          <t.OrderInfoDiv>{titles[0]}</t.OrderInfoDiv>
          <PdtInfo />
          <PdtInfo />
          <FreeShipping />
        </t.TipOff>

        {btnopen ? (
          <t.TipOff>
            <t.OrderInfoDiv>{titles[1]}</t.OrderInfoDiv>
            <PayUserInput />
          </t.TipOff>
        ) : (
          <t.TipOff>
            <t.OrderInfoDiv>{titles[1]}</t.OrderInfoDiv>
            <PayUserInfo BtnonClick={() => setBtnopen(true)} />
          </t.TipOff>
        )}
        {btnchange ? (
          <t.TipOff>
            <t.OrderInfoDiv>{titles[2]}</t.OrderInfoDiv>
            <PayMethodInput />
          </t.TipOff>
        ) : (
          <t.TipOff>
            <t.OrderInfoDiv>{titles[2]}</t.OrderInfoDiv>
            <PayMethod BtnonClick={() => setBtnchange(true)} />
          </t.TipOff>
        )}
      </t.PListArea>
    </>
  )
}

export default OrderPList
