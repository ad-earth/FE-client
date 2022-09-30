import { useEffect, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function Modal(props: ModalType) {
  // 모달 오버레이에서 스크롤 방지
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);

  /**
   * handler
   */
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };

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
            {openPostcode && (
              <DaumPostcode
                onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              />
            )}
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
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
`;
const ContentBox = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 30px ${({ theme }) => theme.rgba04};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg01};
  z-index: 10000;
  overflow: hidden;
`;
const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.rgba04};
`;
export default Modal;
