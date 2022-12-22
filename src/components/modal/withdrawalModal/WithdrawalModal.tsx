import { MainButton } from "../../../elements/buttons/Buttons";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
// import { useMutation } from "react-query";
// import { deleteUserWithdrawal } from "../../../shared/apis/api";
// import { useEffect, useState, useCallback } from "react";

// style
import * as t from "./withdrawalModal.style";
import { theme } from "../../../style/theme";

import useWithdrawalModal from "./useWithdrawalModal";
interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
}

function WithdrawalModal(props: ModalType) {
  let navigate = useNavigate();

  const { mutate, isSuccess } = useWithdrawalModal();
  if (isSuccess) {
    alert("탈퇴 성공!");
    localStorage.clear();
    navigate("/");
  }
  //탈퇴 버튼 선택
  const logoutClick = () => {
    mutate();
    props.handleClose();
  };
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.Base>
            <t.Title>회원탈퇴</t.Title>
            <t.Description>
              가입된 회원정보가 모두 삭제됩니다. 작성하신 게시물은 삭제되지
              않습니다.
              <br />
              탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은
              복원되지 않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다.
              <br />
              회원 탈퇴를 진행하시겠습니까?
            </t.Description>
            <t.ButtonBox>
              <MainButton
                bgColor={`${theme.bg01}`}
                hBgColor={`${theme.bg05}`}
                color={`${theme.fc09}`}
                hColor={`${theme.fc09}`}
                radius="30px"
                width="initial"
                padding="10px 25px"
                onClick={close}
              >
                취소
              </MainButton>
              <MainButton
                radius="30px"
                width="initial"
                padding="10px 25px"
                onClick={logoutClick}
              >
                탈퇴하기
              </MainButton>
            </t.ButtonBox>
          </t.Base>
        </Modal>
      )}
    </>
  );
  //닫기 버튼 이벤트
  function close() {
    props.handleClose();
  }
}

export default WithdrawalModal;
