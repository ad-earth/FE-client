import React, { useState } from "react";
import styled from "styled-components";
import { MainButton } from "../../../elements/Buttons";
import ReviewModal from "../../modal/reviewModal/ReviewModal";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

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
              border="1px solid rgba(100,100,100,0.2)"
              hBorder="1px solid #646464"
              hBgColor="transparent"
              color="#212121"
              fontSize="12px"
              fontWeight="500"
              padding="10px 16px"
              onClick={() => {
                navigate("cancel-call");
              }}
            >
              취소
            </MainButton>

            <MainButton
              radius="30px"
              border="1px solid transparent"
              hBorder="1px solid transparent"
              fontSize="12px"
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
  border: 1px solid #ededed;
  padding: 20px 24px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1px;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    padding: 20px 15px;
    flex-direction: column;
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
  margin-right: 144px;
  cursor: pointer;
  color: #646464;
  font-weight: 600;
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
