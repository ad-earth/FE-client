import { useState } from "react";

import * as t from "./prodOpt.style";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { CountButton, MainButton } from "../../../elements/Buttons";
import { theme } from "../../../style/theme";

const ProdOpt = () => {
  // 옵션 드롭박스
  const [drop, setDrop] = useState(false);
  // 옵션 추가
  const [optCheck, setOptCheck] = useState(false);

  return (
    <t.MainContainer>
      <t.Option>틴케이스 추가구매</t.Option>
      <t.OptDropDown
        drop={drop}
        onClick={() => {
          setDrop(!drop);
        }}
      >
        틴케이스 추가구매 (선택)
        {drop ? <t.IcToggleUp /> : <t.IcToggleDown />}
      </t.OptDropDown>
      {drop ? (
        <div>
          <t.DropMenu
            onClick={() => {
              setOptCheck(true);
              setDrop(!drop);
            }}
          >
            틴케이스 <br />
            <span>1,000원</span>
          </t.DropMenu>
        </div>
      ) : null}
      <t.OptBox>
        <t.OptWrapper>수량</t.OptWrapper>
        <t.CountWrapper>
          <CountButton />
          13,400원
        </t.CountWrapper>
      </t.OptBox>
      {optCheck ? (
        <t.OptBox>
          <t.OptWrapper>
            틴케이스
            <t.IcX
              onClick={() => {
                setOptCheck(false);
              }}
            />
          </t.OptWrapper>
          <t.CountWrapper>
            <CountButton />
            13,400원
          </t.CountWrapper>
        </t.OptBox>
      ) : null}
      <t.Price>
        총 상품 금액(1개) <span>13,400원</span>
      </t.Price>
      <t.BtnWrapper>
        <MainButton radius={"30px"}>구매하기</MainButton>
        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
        >
          장바구니
        </MainButton>
        <MainButton
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc09}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
        >
          <Heart style={{ color: "#bbb", paddingRight: "4px" }} />
          13
        </MainButton>
      </t.BtnWrapper>
    </t.MainContainer>
  );
};

export default ProdOpt;
