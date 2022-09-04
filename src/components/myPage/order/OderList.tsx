import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useNavigate } from "react-router-dom";

import ReviewModal from "../../modal/reviewModal/ReviewModal";
import Product from "./Product";
import { MainButton } from "../../../elements/Buttons";

const OderList = () => {
  let navigate = useNavigate();
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  return (
    <>
      <ReviewModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      {["1", "2"].map((data, i: number) => (
        <OderListBox key={i}>
          <ProductBox>
            <Product />
            <Status>주문 확인</Status>
          </ProductBox>
          <ButtonBox>
            <MainButton
              bgColor="transparent"
              radius="30px"
              border={`1px solid ${theme.rgba08}`}
              hBorder={`1px solid ${theme.ls11}`}
              hBgColor="transparent"
              color={`${theme.fc14}`}
              fontSize={`${theme.fc12}`}
              fontWeight="500"
              padding="10px 16px"
              onClick={() => {
                navigate(`/mypage/cancel-call/${"1?detail=true"}`, {
                  replace: true,
                });
              }}
            >
              취소
            </MainButton>

            <MainButton
              radius="30px"
              border="1px solid transparent"
              hBorder="1px solid transparent"
              fontSize={`${theme.fs12}`}
              fontWeight="500"
              padding="10px 16px"
              onClick={() => {
                setInfoIsOpen(true);
              }}
            >
              구매평 작성
            </MainButton>
          </ButtonBox>
        </OderListBox>
      ))}
    </>
  );
};
export default OderList;

const OderListBox = styled.div`
  border: 1px solid ${theme.ls05};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1px;
  padding: 20px 24px 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid ${theme.rgba02};
    flex-direction: column;
    padding: 20px 15px;
  }
`;
const ProductBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Status = styled.p`
  width: 100px;
  text-align: center;
  color: ${theme.fc09};
  font-weight: 600;
  margin-right: 144px;
  cursor: pointer;
  @media (max-width: 990px) {
    display: none;
  }
`;
const ButtonBox = styled.div`
  width: 100px;
  @media (max-width: 990px) {
    width: 100%;
    padding: 10px 0 0 85px;
    box-sizing: border-box;
  }
`;
