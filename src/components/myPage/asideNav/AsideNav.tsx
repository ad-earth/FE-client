import React, { useState } from "react";
import { theme } from "../../../style/theme";
import * as t from "./asideNav.style";
import { NavLink } from "react-router-dom";
import WithdrawalModal from "../../modal/withdrawalModal/WithdrawalModal";

interface NavLinkType {
  name: string;
  path: string;
  id: number;
}

const AsideNav = () => {
  const [withdrawaIsOpen, setWithdrawaIsOpen] = useState<boolean>(false);
  const navClickEvent = (
    data: NavLinkType,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    data.path === "modal" && e.preventDefault();
    data.name === "회원탈퇴" && setWithdrawaIsOpen(!withdrawaIsOpen);
  };

  return (
    <>
      {/* 회원탈퇴 모달 */}
      <WithdrawalModal
        isOpen={withdrawaIsOpen}
        handleClose={() => setWithdrawaIsOpen(false)}
      />
      <t.NavListBox>
        {list.map((data) => (
          <ul key={data.id}>
            <li>
              <NavLink
                to={data.path}
                onClick={(e) => navClickEvent(data, e)}
                style={({ isActive }) => ({
                  borderBottom: `2px solid ${
                    isActive ? `${theme.fc15}` : `${theme.fc01}`
                  }`,
                })}
              >
                {data.name}
              </NavLink>
            </li>
          </ul>
        ))}
      </t.NavListBox>
    </>
  );
};
const list: NavLinkType[] = [
  { id: 1, name: "주문 조회", path: "mypage" },
  { id: 2, name: "위시 리스트", path: "wish" },
  { id: 3, name: "취소 조회", path: "cancel" },
  { id: 4, name: "정보 수정", path: "modal" },
  { id: 5, name: "회원탈퇴", path: "modal" },
];

export default AsideNav;
