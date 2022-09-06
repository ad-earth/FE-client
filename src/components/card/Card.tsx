import * as t from './Card.style'

import { DataType } from '../../containers/listPage/cardList/CardList'
import { ColorIcon } from '../../elements/ColorIcons'
import { Badge } from '../../elements/Badge'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'

const Card = (props: DataType) => {
  // console.log(props.p_Ad);

  return (
    <>
      <t.CardCp>
        {props.type === 'wish' ? (
          <t.WishCard>
            <t.CardImg src={props.p_Thumbnail} />
            <span>
              <HighlightOffRoundedIcon
                style={{ fill: '#fff', width: '25px' }}
              />
            </span>
          </t.WishCard>
        ) : (
          <>
            {props.p_Ad ? (
              <t.AdCardArea>
                <t.AdCard src={props.p_Thumbnail} />
                <Badge type={'ad'}>AD</Badge>
              </t.AdCardArea>
            ) : (
              <t.CardImg src={props.p_Thumbnail} />
            )}
          </>
        )}

        <t.Div>
          {props.p_Color ? (
            <t.Div>
              <ColorIcon colorCode={props.p_Color} />
            </t.Div>
          ) : null}
          <t.CardTitle>
            [{props.p_Brand}] {props.p_Name}
          </t.CardTitle>
          <t.Cardprice>1,900원</t.Cardprice>
        </t.Div>
      </t.CardCp>
    </>
  )
}

export default Card
