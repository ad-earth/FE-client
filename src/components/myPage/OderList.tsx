import React from "react";
import styled from "styled-components";
import { MainButton } from "../../elements/Buttons";

const OderList = () => {
  return (
    <>
      {["1", "2"].map((data, i: number) => (
        <OderListBox key={i}>
          <ProductBox>
            <ProductInfoBox>
              <ProductImg />
              <ProductInfo>
                <ProducName>[지구샵] 대나무 칫솔</ProducName>
                <ProducOption>성인용(19cm)</ProducOption>
                <ProducPrice>3,000원 / 3 개</ProducPrice>
              </ProductInfo>
            </ProductInfoBox>
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
            >
              취소
            </MainButton>
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
            >
              취소 상세
            </MainButton>
            <MainButton
              radius="30px"
              border="1px solid transparent"
              hBorder="1px solid transparent"
              fontSize="12px"
              fontWeight="500"
              padding="10px 16px"
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
`;
const ProductBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductInfoBox = styled.div`
  display: flex;
  cursor: pointer;
`;
const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  src= "";
  margin-right:16px;
`;
const ProductInfo = styled.div`
  font-size: 15px;
  line-height: 24px;
  & p {
    margin: 0;
  }
`;
const ProducName = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;
const ProducOption = styled.p`
  opacity: 0.7;
`;
const ProducPrice = styled.p``;
const Status = styled.p`
  width: 100px;
  margin: 0;
  text-align: center;
  margin-right: 144px;
  cursor: pointer;
`;
const ButtonBox = styled.div`
  width: 100px;
`;
