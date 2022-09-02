import styled from 'styled-components'

import { ColorIcon } from '../elements/ColorIcons'
import { theme } from '../style/theme'
import { DataType } from '../containers/listPage/CardList'
import { Badge } from '../elements/Badge'

const Card = (props: DataType) => {
  console.log(props.p_Ad)

  return (
    <>
      <CardCp>
        {props.p_Ad ? (
          <AdCardArea>
            <AdCard src={props.p_Thumbnail} />
            <Badge type={'ad'}>AD</Badge>
          </AdCardArea>
        ) : (
          <CardImg src={props.p_Thumbnail} />
        )}
        <Div>
          {props.p_Color ? (
            <Div>
              <ColorIcon colorCode={props.p_Color} />
            </Div>
          ) : null}
          <CardTitle>
            [{props.p_Brand}] {props.p_Name}
          </CardTitle>
          <Cardprice>1,900원</Cardprice>
        </Div>
      </CardCp>
    </>
  )
}

export default Card

const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
`
const CardImg = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: grey;
  background-size: cover;
  & hover {
  }
`
const Div = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`
const CardTitle = styled.div`
  text-transform: capitalize;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: #666666;
`
const Cardprice = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.green2};
`
const AdCard = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid #666666;
  background-color: grey;
  background-size: cover;
  & hover {
  }
`
const AdCardArea = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 0;
  }
`
