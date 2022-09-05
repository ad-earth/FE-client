import styled from 'styled-components'

import CloseIcon from '@mui/icons-material/Close'
import Modal from '../../components/modal/Modal'
import ProdInfo from '../ProdInfo'
interface ModalType {
  isOpen: boolean
  handleClose: () => void
}
const ListModal = (props: ModalType) => {
  function close(e: React.MouseEvent) {
    e.preventDefault()
    props.handleClose()
  }
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <BtnDiv>
            <Xbtn sx={{ fontSize: '36px' }} onClick={close} />
            <ProdInfo />
          </BtnDiv>
        </Modal>
      )}
    </>
  )
}

export default ListModal

const Xbtn = styled(CloseIcon)({
  color: '#999999',
  fontSize: 'large',
  position: 'absolute',
  right: 15,
  cursor: 'pointer',
})

const BtnDiv = styled.div`
  position: relative;
`
