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
          <div>
            <ProdInfo />
            <button onClick={close}>닫기 버튼 필요한 경우 사용 </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ListModal
