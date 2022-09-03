import styled from 'styled-components'

import { Pagination } from '@mui/material'
import SearchBody from '../containers/searchPage/SearchBody'
import SqSearchBar from '../elements/SqSearchBar'

const SearchPage: React.FC = () => {
  return (
    <>
      <SqSearchBar />
      <SearchBody />
      <AreaPage>
        <Pagination count={5} />
      </AreaPage>
    </>
  )
}
export default SearchPage

const AreaPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  color: #cdcfd0c4;
`
