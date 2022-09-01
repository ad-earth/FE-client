import styled from 'styled-components'
import { FreeShipping } from '../../components/paymentPage/OrderPdtInfo'
import PdtInfo from '../../components/paymentPage/PdtInfo'
import PayMethod from '../../components/paymentPage/PayMethod'
import PayUserInfo from '../../components/paymentPage/PayUserInfo'

const OrderPList = () => {
  const titles = ['주문 상품 정보', '주문자 정보', '배송 정보']
  return (
    <>
      <PListArea>
        <TipOff>
          <OrderInfoDiv>{titles[0]}</OrderInfoDiv>
          <PdtInfo />
          <PdtInfo />
          <FreeShipping />
        </TipOff>
        <TipOff>
          <OrderInfoDiv>{titles[1]}</OrderInfoDiv>
          <PayUserInfo />
        </TipOff>
        <TipOff>
          <OrderInfoDiv>{titles[2]}</OrderInfoDiv>
          <PayMethod />
        </TipOff>
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
  background-color: yellow;
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
  font-size: inherit;
  font-weight: bold;
  padding-bottom: 20px;
}
`
