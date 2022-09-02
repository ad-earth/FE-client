import styled from 'styled-components'

const SearchCateDrop = () => {
  return (
    <>
      <Grid>
        <Text>63개의 검색결과</Text>
        <BtnArea style={{ gridColumn: '2/2', gridRow: '1' }}>
          <DropBtn name="select" id="select" defaultValue={'first'}>
            <option value="first">최신순</option>
          </DropBtn>
        </BtnArea>
      </Grid>
    </>
  )
}

export default SearchCateDrop
const Grid = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  margin: 20px 0 40px;
`

const BtnArea = styled.div`
  margin: 0px 20px 25px;
`
const DropBtn = styled.select`
  width: 80px;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
  color: #646464;
  border: none;
  transition: box-shadow 0.4s ease;
  outline-color: #fff;
`
const Text = styled.div`
  font-size: 15px;
  color: #7a7a7a;
  margin-left: 20px;
`
