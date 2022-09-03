import styled from "styled-components";
import { useEffect } from "react";

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function Modal(props: ModalType) {
  // 모달 오버레이에서 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

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
  top: 0;
  left: 0;
  z-index: 9999;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  overflow: hidden;
  @media (max-width: 990px) {
    border-radius: 0;
  }
`;
const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;
export default Modal;
