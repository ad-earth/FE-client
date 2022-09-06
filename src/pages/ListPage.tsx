import { Pagination } from '@mui/material'
import styled from 'styled-components'
import CateButton from '../components/listPage/cateButton/CateButton'
import CardList from '../containers/listPage/cardList/CardList'

export const ListPage = () => {
  return (
    <>
      <CateButton />
      <CardList />
      <AreaPage>
        <Pagination count={5} />
      </AreaPage>
    </>
  )
}
export default ListPage

const AreaPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`
