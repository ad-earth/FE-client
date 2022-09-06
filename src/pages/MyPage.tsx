import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
//components
import Aside from "../containers/myPage/Aside";
import UserHead from "../containers/myPage/UserHead";

import { getOrders } from "../shared/apis/api";

const MyPage = () => {
  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const response = await getOrders("1",);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getPosts();
  // }, []);
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
  position: relative;
  display: flex;
  padding: 0 20px;
  @media (max-width: 990px) {
    padding: 0;
  }
`;
const Section = styled.div`
  width: 84%;
  box-sizing: border-box;
  padding: 0 15px;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
