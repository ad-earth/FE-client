import styled from 'styled-components'
import { FreeShipping } from '../../components/paymentPage/OrderPdtInfo'
import PdtInfo from '../../components/paymentPage/PdtInfo'
import PayMethod from '../../components/paymentPage/PayMethod'
import PayUserInfo from '../../components/paymentPage/PayUserInfo'
import PayUserInput from '../../components/paymentPage/PayUserInput'
import PayMethodInput from '../../components/paymentPage/PayMethodInput'
import { useState } from 'react'

const OrderPList = () => {
  const titles = ['주문 상품 정보', '주문자 정보', '배송 정보']
  const [btnopen, setBtnopen] = useState<boolean>(false)
  const [btnchange, setBtnchange] = useState<boolean>(false)
  return (
    <>
      <PListArea>
        <TipOff>
          <OrderInfoDiv>{titles[0]}</OrderInfoDiv>
          <PdtInfo />
          <PdtInfo />
          <FreeShipping />
        </TipOff>

        {btnopen ? (
          <TipOff>
            <OrderInfoDiv>{titles[1]}</OrderInfoDiv>
            <PayUserInput />
          </TipOff>
        ) : (
          <TipOff>
            <OrderInfoDiv>{titles[1]}</OrderInfoDiv>
            <PayUserInfo BtnonClick={() => setBtnopen(true)} />
          </TipOff>
        )}
        {btnchange ? (
          <TipOff>
            <OrderInfoDiv>{titles[2]}</OrderInfoDiv>
            <PayMethodInput />
          </TipOff>
        ) : (
          <TipOff>
            <OrderInfoDiv>{titles[2]}</OrderInfoDiv>
            <PayMethod BtnonClick={() => setBtnchange(true)} />
          </TipOff>
        )}
      </PListArea>
    </>
  )
}

export default OrderPList

const PListArea = styled.div`
  width: 470px;
  visibility: visible;
  float: left;
  display: flex;
  flex-direction: column;
`
const TipOff = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: #fff;
  flex-direction: column;
`
export const OrderInfoDiv = styled.div`
  font-size: 19px;
  font-weight: bold;
  padding-bottom: 20px;
}
`
