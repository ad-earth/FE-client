import styled from 'styled-components'
import { theme } from '../../style/theme'

const CateDrop = () => {
  return (
    <>
      <BtnArea>
        <DropBtn name="select" id="select" defaultValue={'second'}>
          <option value="first">등록순</option>
          <option value="second">인기순</option>
          <option value="third">낮은가격순</option>
          <option value="fourth">높은가격순</option>
        </DropBtn>
      </BtnArea>
    </>
  )
}

const BtnArea = styled.div`
width: 100%
  padding: 0 30px
  margin: 0px 20px;
  text-align: right;
`
const DropBtn = styled.select`
  text-align: right;
  cursor: pointer;
  color: ${theme.fc09};
  padding: 0 25px;
  margin: 30px 20px 15px;
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  outline-color: ${theme.ls01};
`
export default CateDrop
