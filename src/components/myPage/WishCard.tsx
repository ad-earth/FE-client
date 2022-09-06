import styled from 'styled-components'

import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import { ReactComponent as Message } from '../../assets/icons/message-circle.svg'

import { theme } from '../../style/theme'
import Card from '../card/Card'

interface DataType {
  p_Price?: number
  p_Color?: string
  p_Review?: number
  p_Like?: number
}
const WishCard = (props: DataType) => {
  return (
    <WishCardBox>
      <Card
        p_Thumbnail={
          'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
        }
        p_Brand={'지구샵'}
        p_Name={'키친클로스(체크)'}
        type={'wish'}
      />
      <Icons>
        <IconSpan>
          <Message
            style={{
              color: `${theme.bg09}`,
            }}
          />
          <Count>{props.p_Review}17</Count>
        </IconSpan>
        <IconSpan>
          <Heart fill={`${theme.bg16}`} stroke={`${theme.ls16}`} />
          <Count>{props.p_Like}10</Count>
        </IconSpan>
      </Icons>
    </WishCardBox>
  )
}

export default WishCard

const WishCardBox = styled.div``

const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`
const Icons = styled.div`
  display: inline-flex;
  gap: 10px;
  /* align-items: flex-end; */
`
const IconSpan = styled.span`
  cursor: pointer;
  display: inline-flex !important;
  gap: 5px;
`
