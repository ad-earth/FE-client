import * as t from "./schProdModal.style";
import { ModalType } from "./schProdModal.type";
import Modal from "../Modal";

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
