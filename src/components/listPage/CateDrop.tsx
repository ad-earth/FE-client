import styled from 'styled-components'

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
  color: #646464;
  padding: 0 25px;
  margin: 30px 20px 15px;
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  outline-color: #fff;
`
export default CateDrop
