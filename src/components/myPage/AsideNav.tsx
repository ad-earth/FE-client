import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import WithdrawalModal from "../modal/withdrawalModal/WithdrawalModal";
import styled from "styled-components";

interface LinkType {
  id: number;
  name: string;
  path: string;
  isActive?: string;
}

const AsideNav = () => {
  const location = useLocation();

  // modal
  const [withdrawaIsOpen, setWithdrawaIsOpen] = useState<boolean>(false);
  //click-Link style
  const [isActive, setIsActive] = useState<string>(
    location.pathname.split("/")[1]
  );

  // useEffect(() => {
  //   let pathName = location.pathname.split("/")[1];
  // }, []);

  const navClickEvent = (data: LinkType) => {
    setIsActive(data.path);
    data.name === "회원탈퇴" && setWithdrawaIsOpen(!withdrawaIsOpen);
  };

  return (
    <>
      <WithdrawalModal
        isOpen={withdrawaIsOpen}
        handleClose={() => setWithdrawaIsOpen(false)}
      />
      <NavListBox>
        {data.map((data, i: number) => (
          <ul key={i}>
            <li>
              <NavLink
                to={data.path}
                onClick={(e) => data.path === "modal" && e.preventDefault()}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "#888",
                })}
              >
                <Text
                  onClick={() => {
                    navClickEvent(data);
                  }}
                  className={data.path === isActive ? "action" : ""}
                >
                  {data.name}
                </Text>
              </NavLink>
            </li>
          </ul>
        ))}
      </NavListBox>
    </>
  );
};

export default AsideNav;

const data = [
  { id: 1, name: "주문 조회", path: "order" },
  { id: 2, name: "위시 리스트", path: "wish" },
  { id: 3, name: "취소 조회", path: "cancel" },
  { id: 4, name: "정보 수정", path: "modal" },
  { id: 5, name: "회원탈퇴", path: "modal" },
];

const NavListBox = styled.ul`
  & li {
    width: 100%;
    margin-bottom: 12px;
  }
  & li a {
    color: ${({ theme }) => theme.fc14};
  }
`;
const Text = styled.span``;
