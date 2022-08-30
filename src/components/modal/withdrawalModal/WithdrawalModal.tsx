import { MainButton } from "../../../elements/Buttons";
import Modal from "../Modal";

// style
import * as stc from "./WithdrawalModalStyle";
interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
}
function WithdrawalModal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <stc.Base>
            <stc.Title>회원탈퇴</stc.Title>
            <stc.Description>
              가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지
              않습니다.
              <br />
              탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은
              복원되지 않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다.
              <br />
              회원 탈퇴를 진행하시겠습니까?
            </stc.Description>
            <stc.ButtonBox>
              <MainButton
                bgColor="#fff"
                hBgColor="#f7f7f7"
                color="#646464"
                radius="30px"
                width="initial"
                padding="10px 25px"
              >
                취소
              </MainButton>
              <MainButton radius="30px" width="initial" padding="10px 25px">
                탈퇴하기
              </MainButton>
            </stc.ButtonBox>
          </stc.Base>
        </Modal>
      )}
    </>
  );
}

export default WithdrawalModal;
