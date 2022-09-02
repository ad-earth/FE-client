import { Pagination } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { CateButton } from '../components/listPage/CateButton'
import CardList from '../containers/listPage/CardList'
import ListModal from '../containers/listPage/ListModal'

export const ListPage = () => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false)
  return (
    <>
      <CateButton />
      <CardList />
      <AreaPage>
        <Pagination count={5} />
      </AreaPage>
      <ListModal isOpen={infoIsOpen} handleClose={() => setInfoIsOpen(false)} />
    </>
  )
}
export default ListPage

const AreaPage = styled.div`
  display: flex;
  justify-content: space-around;
  color: #cdcfd0c4;
  margin-top: 50px;
`
