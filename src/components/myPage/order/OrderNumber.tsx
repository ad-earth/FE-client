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
  line-height: 15px;
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  @media (max-width: 990px) {
    flex-direction: row-reverse;
    padding: 12px 15px;
  }
`;

const OrderNumberInfo = styled.div`
  color: ${({ theme }) => theme.fc12};
  display: flex;
  & span {
    color: ${({ theme }) => theme.fc21};
    padding-left: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
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
  border: 1px solid ${({ theme }) => theme.ls15};
  border-radius: 50%;
  background: none;
  position: relative;
  left: 4px;

  :after {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    top: 4px;
    left: 43%;
    border-left: 1px solid ${({ theme }) => theme.ls15};
    border-top: 1px solid ${({ theme }) => theme.ls15};
    transform: translateX(-50%) rotate(130deg);
  }
`;
const OrderDate = styled.div`
  color: ${({ theme }) => theme.fc08};
  display: flex;
  & span {
    padding-left: 4px;
    @media (max-width: 990px) {
      font-weight: 700;
      color: ${({ theme }) => theme.fc12};
    }
  }
`;
