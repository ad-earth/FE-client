import Modal from "../Modal";
import * as t from "./SearchModalStyle";

interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}

const SearchModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.IdContainer>
            <t.IdHeader>
              아이디 찾기
              <t.Close
                sx={{ fontSize: 24, cursor: "pointer" }}
                onClick={() => props.handleClose()}
              />
            </t.IdHeader>
          </t.IdContainer>
          <div>
            <button onClick={() => props.handleClose()}></button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;
