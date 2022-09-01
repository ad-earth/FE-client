import React, { useState } from "react";
import { Link } from "react-router-dom";
import WithdrawalModal from "../modal/withdrawalModal/WithdrawalModal";
import styled from "styled-components";

const AsideNav = () => {
  const [withdrawaIsOpen, setWithdrawaIsOpen] = useState<boolean>(false);
  return (
    <>
      <WithdrawalModal
        isOpen={withdrawaIsOpen}
        handleClose={() => setWithdrawaIsOpen(false)}
      />
      <NavListBox>
        <li>
          <Link to="">주문조회</Link>
        </li>
        <li>
          <Link to="wish">위시 리스트</Link>
        </li>
        <li>
          <Link to="cancel">취소조회</Link>
        </li>
        <li>
          <a href=" # "> 정보 수정 </a>
        </li>
        <li
          onClick={() => {
            setWithdrawaIsOpen(!withdrawaIsOpen);
          }}
        >
          <a href=" # "> 회원탈퇴 </a>
        </li>
      </NavListBox>
    </>
  );
};

export default AsideNav;

const NavListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  /* background-color: red; */
  & li {
    margin-bottom: 12px;
    width: 100%;
    /* background-color: pink; */
  }
  & li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    &.active {
      border-bottom: 1px solid lightblue;
    }
  }
`;
