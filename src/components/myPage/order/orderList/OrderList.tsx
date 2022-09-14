import React, { useState } from "react";
import { theme } from "../../../../style/theme";
import { useNavigate } from "react-router-dom";
import ReviewModal from "../../../modal/reviewModal/ReviewModal";
import Product from "../Product";
import { MainButton } from "../../../../elements/Buttons";

import * as t from "./orderList.style";

const OrderList = () => {
  let navigate = useNavigate();
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  return (
    <>
      <ReviewModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      {["1", "2"].map((data, i: number) => (
        <t.OderListBox key={i}>
          <t.ProductBox>
            <Product />
            <t.Status>주문 확인</t.Status>
          </t.ProductBox>
          <t.ButtonBox>
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
          </t.ButtonBox>
        </t.OderListBox>
      ))}
    </>
  );
};
export default OrderList;
