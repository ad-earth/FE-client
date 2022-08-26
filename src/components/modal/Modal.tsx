import styled from "styled-components";

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <ModalContainer>
          <ContentBox>
            <div>{props.children}</div>
          </ContentBox>
          <ModalBackdrop
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              props.handleClose();
            }}
          ></ModalBackdrop>
        </ModalContainer>
      )}
    </>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
const ContentBox = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;
const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
export default Modal;
