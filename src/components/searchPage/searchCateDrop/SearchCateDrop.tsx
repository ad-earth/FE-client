import * as t from './SearchCateDrop.style'

const SearchCateDrop = () => {
  return (
    <>
      <t.Grid>
        <t.Text>63개의 검색결과</t.Text>
        <t.BtnArea style={{ gridColumn: '2/2', gridRow: '1' }}>
          <t.DropBtn name="select" id="select" defaultValue={'first'}>
            <option value="first">최신순</option>
          </t.DropBtn>
        </t.BtnArea>
      </t.Grid>
    </>
  )
}

export default SearchCateDrop
