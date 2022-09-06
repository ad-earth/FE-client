import { DataType } from '../../../containers/listPage/CardList'
import { Badge } from '../../../elements/Badge'
import * as t from './CardBaged.style'

const CardBadge = (props: DataType) => {
  return (
    <>
      <t.Div>
        <Badge type={'best'}>BEST</Badge>
      </t.Div>
    </>
  )
}

export default CardBadge
