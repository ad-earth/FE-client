import * as t from "./SearchModalStyle";
import { useState } from "react";

import Modal from "../Modal";
import IdSearch from "./IdSearch";
import PassSearch from "./PassSearch";

interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
  isChecked?: boolean;
}

const SearchModal = (props: ModalType) => {
  const [isChecked, setIsChecked] = useState(true);

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
            <t.SearchBody>
              <t.SearchNav>
                <t.CheckedBtn
                  isChecked={isChecked}
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                >
                  아이디 찾기
                </t.CheckedBtn>
                <t.CheckedBtn
                  isChecked={!isChecked}
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                >
                  비밀번호 찾기
                </t.CheckedBtn>
              </t.SearchNav>
              {isChecked ? <IdSearch /> : <PassSearch />}
            </t.SearchBody>
          </t.IdContainer>
        </Modal>
      )}
    </>
  );
};

export default SearchModal;
