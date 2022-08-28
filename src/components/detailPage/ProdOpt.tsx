import { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { ReactComponent as Heart } from "../../assets/icon/heart.svg";

import { theme } from "../../style/theme";
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
    <OptContainer>
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
        수량
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
        총 상품 금액(2개) <span>14,400원</span>
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
          <Heart style={{ color: "#bbb" ,paddingRight: '4px'}} />
          13
        </MainButton>
      </BtnWrapper>
    </OptContainer>
  );
};

export default ProdOpt;
const OptContainer = styled.div`
  width: calc(100%-20px);
  position: relative;
`;
const Option = styled.div`
  margin-top: 24px;
  color: ${theme.colors.gray1};
  font-size: ${theme.fontSize.small};
  font-weight: 600;
`;
const OptDropDown = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  color: ${theme.colors.gray1};
  font-size: 14px;
  padding: 8px 12px;
  border: ${(props: PropsType) =>
    props.drop ? "0.5px solid #212121" : "0.5px solid #e5e7eb"};
  cursor: pointer;
`;
const DropMenu = styled.div`
  position: absolute;
  width: 94.9%;
  z-index: 5px;
  color: ${theme.colors.gray1};
  background: #fff;
  font-size: 14px;
  padding: 8px 12px;
  border-top: none;
  border-bottom: 0.5px solid #212121;
  border-left: 0.5px solid #212121;
  border-right: 0.5px solid #212121;
  cursor: pointer;
  span {
    font-weight: 600;
  }
  :hover {
    background: ${theme.colors.gray4};
  }
`;
const OptBox = styled.div`
  /* width: calc(100%-20px); */
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.gray1};
  background: rgba(100, 100, 100, 0.03);
  margin-top: 10px;
  padding: 10px;
`;
const OptWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: ${theme.colors.gray1};
  margin-top: 25px;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: ${theme.colors.gray1};
  margin-top: 25px;
  span {
    color: ${theme.colors.green2};
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 25px;
`;
