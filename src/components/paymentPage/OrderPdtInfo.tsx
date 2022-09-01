import styled from 'styled-components'

export const FreeShipping = () => {
  return (
    <>
      <ShippingFee>배송비 0원</ShippingFee>
    </>
  )
}

const ShippingFee = styled.div`
  background: rgba(33, 33, 33, 0.03);
  text-align: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  border: 1px solid rgba(33, 33, 33, 0.15);
  border-top: none;
  font-size: 13px;
  line-height: 1.4;
`
