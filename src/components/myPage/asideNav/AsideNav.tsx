import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { theme } from "../../../style/theme";
import * as t from "./asideNav.style";

import WithdrawalModal from "../../modal/withdrawalModal/WithdrawalModal";
interface LinkType {
  id: number;
  name: string;
  path: string;
  isActive?: string;
}

const AsideNav = () => {
  // modal
  const [withdrawaIsOpen, setWithdrawaIsOpen] = useState<boolean>(false);
  const navClickEvent = (data: LinkType) => {
    data.name === "회원탈퇴" && setWithdrawaIsOpen(!withdrawaIsOpen);
  };

  return (
    <>
      <WithdrawalModal
        isOpen={withdrawaIsOpen}
        handleClose={() => setWithdrawaIsOpen(false)}
      />
      <t.NavListBox>
        {data.map((data, i: number) => (
          <ul key={i}>
            <li>
              <NavLink
                to={data.path}
                onClick={(e) => data.path === "modal" && e.preventDefault()}
                style={({ isActive }) => ({
                  borderBottom: `2px solid ${
                    isActive ? `${theme.fc15}` : `${theme.fc01}`
                  }`,
                })}
                end
              >
                <t.Text
                  onClick={() => {
                    navClickEvent(data);
                  }}
                >
                  {data.name}
                </t.Text>
              </NavLink>
            </li>
          </ul>
        ))}
      </t.NavListBox>
    </>
  );
};
const data = [
  { id: 1, name: "주문 조회", path: "" },
  { id: 2, name: "위시 리스트", path: "wish" },
  { id: 3, name: "취소 조회", path: "cancel" },
  { id: 4, name: "정보 수정", path: "modal" },
  { id: 5, name: "회원탈퇴", path: "modal" },
];

export default AsideNav;
