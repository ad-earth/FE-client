import Modal from "./Modal";

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
}

const TestModal = (props: ModalType) => {
  //닫기 버튼 이벤트
  function close(e: React.MouseEvent) {
    e.preventDefault();
    props.handleClose();
  }
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <div>
            컨텐츠 컴포넌트
            <button onClick={close}>닫기 버튼 필요한 경우 사용 </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TestModal;
