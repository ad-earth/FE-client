import * as t from "./asideNav.style";
import { useState } from "react";
import { ListType } from "./asideNav.type";
import WithdrawalModal from "../../modal/withdrawalModal/WithdrawalModal";
import UserInfoModal from "../../modal/userInfoModal/UserInfoModal";
import { useViewport } from "../../../hooks/useViewport";

const desktopList: ListType[] = [
  { id: 1, name: "주문 조회", path: "mypage" },
  { id: 2, name: "위시 리스트", path: "wish" },
  { id: 3, name: "취소 조회", path: "cancel" },
  { id: 4, name: "정보 수정", path: "modal" },
  { id: 5, name: "회원탈퇴", path: "modal" },
];
const MobileList: ListType[] = [
  { id: 1, name: "주문 조회", path: "mypage" },
  { id: 2, name: "위시 리스트", path: "wish" },
  { id: 3, name: "취소 조회", path: "cancel" },
];

const Desktop = () => {
  const [withdrawaIsOpen, setWithdrawaIsOpen] = useState<boolean>(false);
  const [userInfoIsOpen, setUserInfoIsOpen] = useState<boolean>(false);
  const withdrawal = withdrawaIsOpen && (
    <WithdrawalModal
      isOpen={withdrawaIsOpen}
      handleClose={() => setWithdrawaIsOpen(false)}
    />
  );
  const userInfo = userInfoIsOpen && (
    <UserInfoModal
      isOpen={userInfoIsOpen}
      handleClose={() => setUserInfoIsOpen(false)}
    />
  );
  const navClickEvent = (
    list: ListType,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    list.path === "modal" && event.preventDefault();
    list.name === "회원탈퇴" && setWithdrawaIsOpen(!withdrawaIsOpen);
    list.name === "정보 수정" && setUserInfoIsOpen(!userInfoIsOpen);
  };
  return (
    <>
      {withdrawal}
      {userInfo}
      <t.DesktopNavBox>
        {desktopList.map((list) => (
          <ul key={list.id}>
            <li>
              <t.Nav
                to={list.path}
                onClick={(e) => navClickEvent(list, e)}
                className={({ isActive }) => isActive && "active"}
              >
                {list.name}
              </t.Nav>
            </li>
          </ul>
        ))}
      </t.DesktopNavBox>
    </>
  );
};
const Mobile = () => {
  const navClickEvent = (
    list: ListType,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    list.path === "modal" && event.preventDefault();
  };
  return (
    <>
      {MobileList.map((list) => (
        <t.MobileNavBox key={list.id}>
          <t.Nav
            to={list.path}
            onClick={(e) => navClickEvent(list, e)}
            className={({ isActive }) => isActive && "active"}
          >
            {list.name}
          </t.Nav>
        </t.MobileNavBox>
      ))}
    </>
  );
};

export default function AsideNav() {
  const viewport = useViewport();
  return viewport > 990 ? <Desktop /> : <Mobile />;
}
