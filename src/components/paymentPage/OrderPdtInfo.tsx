import styled from 'styled-components'

export const FreeShipping = () => {
  return (
    <>
      <ShippingFee>배송비 0원</ShippingFee>
    </>
  )
}

const ShippingFee = styled.div`
  background: ${({ theme }) => theme.rgba01};
  text-align: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.rgba04};
  border-top: none;
  font-size: ${({ theme }) => theme.fs13};
  line-height: 1.4;
`
