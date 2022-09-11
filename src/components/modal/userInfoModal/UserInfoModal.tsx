import * as t from "./UserInfoModalStyle";
import Modal from "../Modal";
import Profile from "../../signUpPage/profile/Profile";
import SignUpForm from "../../signUpPage/signUpForm/SignUpForm";
import AddressForm from "../../signUpPage/addressForm/AddressForm";
import { MainButton } from "../../../elements/Buttons";
import { theme } from "../../../style/theme";

interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}

const UserInfoModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.Container>
            <t.InfoHeader>
              정보 수정
              <t.Close onClick={() => props.handleClose()} />
            </t.InfoHeader>
            <t.InfoBody>
              <Profile />
              <SignUpForm />
              <AddressForm />
              <t.SubmitDiv>
                <MainButton fontSize={theme.fs14}>확인</MainButton>
              </t.SubmitDiv>
            </t.InfoBody>
          </t.Container>
        </Modal>
      )}
    </>
  );
};
export default UserInfoModal;
