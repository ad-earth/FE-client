import styled from 'styled-components'

const SearchNav = () => {
  return (
    <>
      <LineDiv>
        <span>검색결과</span>
      </LineDiv>
    </>
  )
}
export default SearchNav

const LineDiv = styled.div`
  display: flex;
  width: 97%;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.rgba04};
  margin: 0px auto;
  padding-bottom: 15px;
  & span {
    font-size: ${({ theme }) => theme.fs15};
    color: ${({ theme }) => theme.fc09};
  }
`
