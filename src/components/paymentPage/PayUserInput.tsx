import styled from 'styled-components'
import { Input } from '../../elements/Input'

const PayUserInput = () => {
  return (
    <DivArea>
      <Div>
        <Input color="#20252b" fontSize="14px" holderName="이름" />
      </Div>
      <Div>
        <Input color="#20252b" fontSize="14px" holderName="연락처" />
      </Div>
    </DivArea>
  )
}
export default PayUserInput
const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Div = styled.div`
  width: 49%;
`
