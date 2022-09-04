import styled from 'styled-components'
import { theme } from '../../style/theme'


const PdtInfo = () => {
  return (
    <>
      <ListArea>
        <PdArea>
          <PdInfoDiv>
            <ProductImg />
            <ProductInfo>
              <ProductName>[지구샵] 스트롱 고체치약(쿨민트향)</ProductName>
              <ProducOption>틴케이스 - 1개</ProducOption>
              <ProducPrice>1,000원 / 3 개</ProducPrice>
            </ProductInfo>
          </PdInfoDiv>
        </PdArea>
      </ListArea>
    </>
  )
}

export default PdtInfo

const ListArea = styled.div`
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.15);
  padding: 14px;
  box-sizing: border-box;
  margin-top: -1px;
`
const PdArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PdInfoDiv = styled.div`
  display: flex;
  cursor: pointer;
`
const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  src= "";
  margin-right:16px;
`
const ProductInfo = styled.div`
  font-size: 15px;
  line-height: 24px;
  & p {
    margin: 0;
  }
`
const ProductName = styled.p`
  color: ${theme.fc14};
  margin: 0 0 4px;
  font-size: 14px;
`
const ProducOption = styled.p`
  opacity: 0.7;
  font-size: 12px;
`
const ProducPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`
