import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// components
import UserHeadInfo from "../components/myPage/userHeadInfo/UserHeadInfo";
import AsideNav from "../components/myPage/asideNav/AsideNav";
// hooks
import { useGetLocalStorage } from "../hooks/useGetStorage";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = useGetLocalStorage("token");

  /** login check */
  useEffect(() => {
    if (isLogin) return;
    navigate("/");
  }, [isLogin]);

  return (
    <>
      {isLogin && (
        <MypageWrap>
          <Nav>
            <AsideNav />
          </Nav>
          <Section>
            <UserHeadInfo />
            <Outlet />
          </Section>
        </MypageWrap>
      )}
    </>
  );
};
export default MyPage;

const MypageWrap = styled.div`
  max-width: 1200px;
  margin: 80px auto 100px;
  position: relative;
  display: flex;
  padding: 0 20px;
  @media (max-width: 990px) {
    flex-direction: column;
    background-color: ${({ theme }) => theme.bg06};
    padding: 0;
    margin: 0 auto 100px;
  }
`;
const Section = styled.div`
  width: 84%;
  box-sizing: border-box;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.bg01};
  @media (max-width: 990px) {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.ls03};
  }
`;
const Nav = styled.nav`
  width: 16%;
  padding: 0 12px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 100%;
    padding: 0;
  }
`;
