import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface MobileType {
  isMobile?: boolean;
}
const OrderNumber = (props: MobileType) => {
  return (
    <OrderNumberBox>
      <OrderNumberInfo>
        <Label>주문번호</Label>
        <Link to={`${"1?detail=true"}`} className="link">
          {props.isMobile ? (
            <span>주문상세보기</span>
          ) : (
            <span>20228344848</span>
          )}

          <ArrowIcon />
        </Link>
      </OrderNumberInfo>
      <OrderDate>
        <Label> 주문일자 </Label>
        <span> 2022-08-29</span>
      </OrderDate>
    </OrderNumberBox>
  );
};

export default OrderNumber;
const OrderNumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 15px;
  line-height: 15px;
  /* background: red; */
  @media (max-width: 990px) {
    flex-direction: row-reverse;
    padding: 12px 15px;
  }
`;

const OrderNumberInfo = styled.div`
  color: #333;
  display: flex;
  & span {
    color: ${({ theme }) => theme.colors.green3};
    padding-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  & .link {
    display: flex;
  }
`;
const Label = styled.p`
  @media (max-width: 990px) {
    display: none;
  }
`;
const ArrowIcon = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.green3};
  position: relative;
  left: 4px;
  background: none;

  :after {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    left: 43%;
    top: 4px;
    border-left: 1px solid ${({ theme }) => theme.colors.green3};
    border-top: 1px solid ${({ theme }) => theme.colors.green3};
    transform: translateX(-50%) rotate(130deg);
  }
`;
const OrderDate = styled.div`
  color: #757575;
  /* display: inherit; */
  display: flex;
  & span {
    padding-left: 4px;
    @media (max-width: 990px) {
      font-weight: 700;
      color: #333;
    }
  }
`;
