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
  font-size: ${({ theme }) => theme.fs15};
  cursor: pointer;
  color: ${({ theme }) => theme.fc09};
  border: none;
  transition: box-shadow 0.4s ease;
  outline-color: ${({ theme }) => theme.ls01};
`
const Text = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.fc07};
  margin-left: 20px;
`
