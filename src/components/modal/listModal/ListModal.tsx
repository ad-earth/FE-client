import * as t from "./listModal.style";
import Modal from "../Modal";
import Details from "../../../containers/detailPage/details/Details";

const ListModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  function close(e: React.MouseEvent) {
    e.preventDefault();
    handleClose();
  }

  return (
    <>
      {isOpen && (
        <Modal handleClose={() => handleClose()} isOpen={isOpen}>
          <t.Wrap>
            <t.BtnDiv>
              <t.Xbtn sx={{ fontSize: "36px" }} onClick={close} />
            </t.BtnDiv>
            <Details />
          </t.Wrap>
        </Modal>
      )}
    </>
  );
};

export default ListModal;
