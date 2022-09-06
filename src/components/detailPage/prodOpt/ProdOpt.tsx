import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { CountButton, MainButton } from "../../../elements/Buttons";
import { theme } from "../../../style/theme";

interface PropsType {
  drop: boolean;
}
const ProdOpt = () => {
  // 옵션 드롭박스
  const [drop, setDrop] = useState(false);
  // 옵션 추가
  const [optCheck, setOptCheck] = useState(false);

  return (
    <MainContainer>
      <Option>틴케이스 추가구매</Option>
      <OptDropDown
        drop={drop}
        onClick={() => {
          setDrop(!drop);
        }}
      >
        틴케이스 추가구매 (선택)
        {drop ? (
          <KeyboardArrowUpRoundedIcon sx={{ color: theme.fc04 }} />
        ) : (
          <KeyboardArrowDownRoundedIcon sx={{ color: theme.fc04 }} />
        )}
      </OptDropDown>
      {drop ? (
        <div>
          <DropMenu
            onClick={() => {
              setOptCheck(true);
              setDrop(!drop);
            }}
          >
            틴케이스 <br />
            <span>1,000원</span>
          </DropMenu>
        </div>
      ) : null}
      <OptBox>
        <OptWrapper>수량</OptWrapper>
        <CountWrapper>
          <CountButton />
          13,400원
        </CountWrapper>
      </OptBox>
      {optCheck ? (
        <OptBox>
          <OptWrapper>
            틴케이스
            <HighlightOffRoundedIcon
              sx={{ color: theme.fc04, cursor: "pointer" }}
              onClick={() => {
                setOptCheck(false);
              }}
            />
          </OptWrapper>
          <CountWrapper>
            <CountButton />
            13,400원
          </CountWrapper>
        </OptBox>
      ) : null}
      <Price>
        총 상품 금액(1개) <span>13,400원</span>
      </Price>
      <BtnWrapper>
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
      </BtnWrapper>
    </MainContainer>
  );
};

export default ProdOpt;

const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;
const Option = styled.div`
  margin-top: 24px;
  color: ${theme.fc09};
  font-size: ${theme.fs12};
  font-weight: 600;
`;
const OptDropDown = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${(props: PropsType) =>
    props.drop ? `0.5px solid ${theme.ls14}` : `0.5px solid ${theme.ls08}`};
  cursor: pointer;
`;
const DropMenu = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5px;
  color: ${theme.fc09};
  background: ${theme.bg01};
  font-size: ${theme.fs14};
  padding: 8px 12px;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 0.5px solid ${theme.ls14};
  border-left: 0.5px solid ${theme.ls14};
  border-right: 0.5px solid ${theme.ls14};
  cursor: pointer;
  span {
    font-weight: 600;
  }
  :hover {
    background: ${theme.bg04};
  }
`;
const OptBox = styled.div`
  width: 100%;
  font-size: ${theme.fs12};
  color: ${theme.fc09};
  background: ${theme.rgba01};
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
const OptWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CountWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  margin-top: 25px;
  span {
    color: ${theme.fc15};
  }
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 25px;
`;
