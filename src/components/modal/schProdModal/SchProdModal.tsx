import * as t from "./SchProdModal.style";
import { theme } from "../../../style/theme";
import Modal from "../Modal";
interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}

const SchProdModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.SchContainer>
            <t.Close onClick={() => props.handleClose()} />
            <t.SchInput>
              <input type="text" placeholder="검색" />
              <t.SchIcon />
            </t.SchInput>
          </t.SchContainer>
        </Modal>
      )}
    </>
  );
};

export default SchProdModal;
