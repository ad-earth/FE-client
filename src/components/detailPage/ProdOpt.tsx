import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { CountButton, MainButton } from "../../elements/Buttons";

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
          <KeyboardArrowUpRoundedIcon sx={{ color: "#aaa" }} />
        ) : (
          <KeyboardArrowDownRoundedIcon sx={{ color: "#aaa" }} />
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
              sx={{ color: "#aaa", cursor: "pointer" }}
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
          border={"0.5px solid #e5e7eb"}
          bgColor={"#fff"}
          color={"#646464"}
          hBorder={"0.5px solid #646464"}
          hBgColor={"#fff"}
        >
          장바구니
        </MainButton>
        <MainButton
          radius={"30px"}
          border={"0.5px solid #e5e7eb"}
          bgColor={"#fff"}
          color={"#646464"}
          hBorder={"0.5px solid #646464"}
          hBgColor={"#fff"}
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
  color: #646464;
  font-size: 12px;
  font-weight: 600;
`;
const OptDropDown = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #646464;
  font-size: 14px;
  padding: 8px 12px;
  box-sizing: border-box;
  border: ${(props: PropsType) =>
    props.drop ? "0.5px solid #212121" : "0.5px solid #bbb"};
  cursor: pointer;
`;
const DropMenu = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5px;
  color: #646464;
  background: #fff;
  font-size: 14px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 0.5px solid #212121;
  border-left: 0.5px solid #212121;
  border-right: 0.5px solid #212121;
  cursor: pointer;
  span {
    font-weight: 600;
  }
  :hover {
    background: #f6f6f6;
  }
`;
const OptBox = styled.div`
  width: 100%;
  font-size: 12px;
  color: #646464;
  background: rgba(100, 100, 100, 0.03);
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
  font-size: 15px;
  color: #646464;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #646464;
  margin-top: 25px;
  span {
    color: #00913a;
  }
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 25px;
`;
