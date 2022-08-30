import { Outlet } from "react-router-dom";
import styled from "styled-components";
//components
import Aside from "../containers/myPage/Aside";
import UserHead from "../containers/myPage/UserHead";

const MyPage = () => {
  return (
    <Wrap className="Wrap">
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
  padding: 0 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;
const Section = styled.div`
  width: 84%;
  padding: 0 15px;
  box-sizing: border-box;
`;
