import * as t from './CateDrop.style'

const CateDrop = () => {
  return (
    <>
      <t.BtnArea>
        <t.DropBtn name="select" id="select" defaultValue={'second'}>
          <option value="first">등록순</option>
          <option value="second">인기순</option>
          <option value="third">낮은가격순</option>
          <option value="fourth">높은가격순</option>
        </t.DropBtn>
      </t.BtnArea>
    </>
  )
}

export default CateDrop
