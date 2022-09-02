import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const SqSearchBar = () => {
  return (
    <>
      <Div>
        <InputDiv>
          <SearchIcon />
          <input placeholder="검색" />
          <Officon />
        </InputDiv>
      </Div>
    </>
  )
}
export default SqSearchBar

const Div = styled.div`
  max-width: 350px;
  margin: 55px auto;
  position: relative;
`
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start
  width: 80%;
  height: 34px;
  padding: 0 20px;
  border: 1px solid #212121;
  border-radius: 3px;
  ::selection {
    background-color: #00913a;
    color: #fff;
  }
  & input {
  width: 100%;
  padding: 0 14px 0 0;
  margin: 0 10px;
  border: none;
  :focus {
    outline: none;
  }
  ::selection {
    background-color: #00913a;
    color: #fff;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 14px;
  }}

`
const SearchIcon = styled(SearchRoundedIcon)({
  color: '#999',
  cursor: 'pointer',
})

const Officon = styled(HighlightOffIcon)({
  color: '#999',
  cursor: 'pointer',
})
