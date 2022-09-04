import styled from 'styled-components'
import { useState } from 'react'
//pages//
import { FreeShipping } from '../../components/paymentPage/OrderPdtInfo'
import PdtInfo from '../../components/paymentPage/PdtInfo'
import PayMethod from '../../components/paymentPage/PayMethod'
import PayUserInfo from '../../components/paymentPage/PayUserInfo'
import PayUserInput from '../../components/paymentPage/PayUserInput'
import PayMethodInput from '../../components/paymentPage/PayMethodInput'
import { theme } from '../../style/theme'



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
     @media (max-width: 930px) {
    display: flex;
    width: 88%;
   align-items: flex-start;
  }
`
const TipOff = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color:${theme.bg01};
  flex-direction: column;
`
export const OrderInfoDiv = styled.div`
  font-size: ${theme.fs19};
  font-weight: bold;
  padding-bottom: 20px;
}
`
