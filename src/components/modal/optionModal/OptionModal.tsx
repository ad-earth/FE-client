import { useState } from "react";
import * as t from "./OptionModal.style";

import { CountButton, MainButton } from "../../../elements/Buttons";
import Modal from "../Modal";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
}

const OptionModal = (props: ModalType) => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      {props.isOpen && (
        <Modal handleClose={() => props.handleClose()} isOpen={props.isOpen}>
          <t.OptContainer>
            <t.OptHeader>
              옵션 변경
              <t.Close
                sx={{ fontSize: 24, cursor: "pointer" }}
                onClick={() => props.handleClose()}
              />
            </t.OptHeader>
            <t.OptContents>
              <t.ItemInfo>
                <img src="https://cdn.imweb.me/thumbnail/20220117/6a329ba1bf9e7.jpg" />
                <t.ItemDesc>
                  [지구샵] 대나무 칫솔<span>2,800원</span>
                </t.ItemDesc>
              </t.ItemInfo>

              {/* 드롭다운 */}
              <t.DropDown>
                <p>대나무 칫솔 *</p>
                <t.OptDrop drop={drop} onClick={() => setDrop(!drop)}>
                  대나무 칫솔(필수)
                  {drop ? (
                    <KeyboardArrowUpRoundedIcon sx={{ color: "#aaa" }} />
                  ) : (
                    <KeyboardArrowDownRoundedIcon sx={{ color: "#aaa" }} />
                  )}
                </t.OptDrop>
                {drop ? (
                  <div>
                    <t.DropMenu
                      onClick={() => {
                        setDrop(!drop);
                      }}
                    >
                      성인용(19cm)
                    </t.DropMenu>
                  </div>
                ) : null}
              </t.DropDown>

              <t.SelectBox>
                <t.SelInfo>
                  <p>성인용(19cm)</p>
                  <t.CancelBtn />
                </t.SelInfo>
                <t.SelPrice>
                  <CountButton />
                  <p>2,800원</p>
                </t.SelPrice>
              </t.SelectBox>
              <t.Total>
                <div>
                  총 수량 <span>1</span>개
                </div>
                <p>2,800원</p>
              </t.Total>
            </t.OptContents>
            <t.OptBtn>
              <MainButton
                width={"70px"}
                fontWeight={"normal"}
                radius={"30px"}
                border={"0.5px solid #e5e7eb"}
                bgColor={"#fff"}
                color={"#212121"}
                hBorder={"0.5px solid #646464"}
                hBgColor={"#fff"}
                onClick={() => props.handleClose()}
              >
                취소
              </MainButton>
              <MainButton width={"70px"} fontWeight={"normal"} radius={"30px"}>
                변경
              </MainButton>
            </t.OptBtn>
          </t.OptContainer>
        </Modal>
      )}
    </>
  );
};

export default OptionModal;
