import styled from 'styled-components'

import { ReactComponent as Heart } from '../assets/icon/heart.svg'
import { ReactComponent as Message } from '../assets/icon/message-circle.svg'
import { ReactComponent as Cart } from '../assets/icon/shopping-cart.svg'
import { ColorIcon } from '../elements/ColorIcons'
import { theme } from '../style/theme'
import { DataType } from '../pages/ListPage'

const Card = (props: DataType) => {
  return (
    <>
      <CardCp>
        <CardImg src={props.p_Thumbnail} />
        <Div>
          <Div>
            <ColorIcon colorCode={props.p_Color} />
          </Div>
          <CardTitle>
            [{props.p_Brand}]{props.p_Name}
          </CardTitle>
          <Cardprice>1,900원</Cardprice>
        </Div>
        <Div>
          <IconDiv>
            <IconSpan>
              <Message
                style={{
                  color: `${theme.colors.gray2}`,
                }}
              />
              <Count>{props.p_Review}</Count>
            </IconSpan>
            <IconSpan>
              <Heart
                style={{
                  color: `${theme.colors.gray2}`,
                  width: '20px',
                }}
              />
              <Count>{props.p_Like}</Count>
            </IconSpan>
            <Cart
              style={{
                color: `${theme.colors.gray2}`,
              }}
            />
          </IconDiv>
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
  margin; 0 auto;
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
const Count = styled.span`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.gray2};
`
const IconSpan = styled.span`
  cursor: pointer;
  display: inline-flex !important;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
  margin: 0 !important;
`
const IconDiv = styled.div`
  display: inline-flex;
  gap: 10px;
  margin-top: 0.75em !important;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`
