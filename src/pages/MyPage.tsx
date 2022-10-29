import { Outlet } from "react-router-dom";
import styled from "styled-components";
//components
import { Aside } from "../containers/myPage/Aside";
import UserHead from "../containers/myPage/UserHead";

const MyPage = () => {
  return (
    <Wrap>
      <Aside />
      <Section>
        <UserHead />
        <Outlet />
      </Section>
    </Wrap>
  );
};
export default MyPage;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 80px auto 100px;
  position: relative;
  display: flex;
  padding: 0 20px;

  @media (max-width: 990px) {
    padding: 0;
    flex-direction: column;
    margin: 0 auto 100px;
    background-color: ${({ theme }) => theme.bg06};
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
