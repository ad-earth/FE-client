import styled from 'styled-components'
import { DataType } from '../../containers/listPage/CardList'
import { Badge } from '../../elements/Badge'

const CardBadge = (props: DataType) => {
  return (
    <>
      <Div>
        <Badge type={'best'}>BEST</Badge>
      </Div>
    </>
  )
}

export default CardBadge

const Div = styled.div`
  display: flex;
  margin: 0.5em 0;
  width: 100%;
  box-sizing: border-box;
  font-size: inherit;
`
