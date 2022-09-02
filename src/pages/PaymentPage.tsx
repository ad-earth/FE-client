import styled from 'styled-components'
import PayTitle from '../components/paymentPage/PayTitle'
import OrderPay from '../containers/paymentPage/OrderPay'
import OrderPList from '../containers/paymentPage/OrderPList'

const PaymentPage = () => {
  return (
    <>
      <Area>
        <PayTitle />
        <PayArea>
          <OrderPList />
          <OrderPay></OrderPay>
        </PayArea>
      </Area>
    </>
  )
}
export default PaymentPage
const Area = styled.div`
  background-color: #f3f3f3;
  display: grid;
  justify-content: center;
  width: 100%;
`

const PayArea = styled.div`
  margin: 0px auto;
  margin-bottom: 100px;
`
