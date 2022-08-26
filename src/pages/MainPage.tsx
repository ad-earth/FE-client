import styled from "styled-components";
import BestProdList from "../containers/mainPage/BestProdList";
import MainBanner from "../containers/mainPage/MainBanner";
import SocialLinkList from "../containers/mainPage/SocialLinkList";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <MainContainer>
        <BestProdList />
        <SocialLinkList />
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  /* width: 1200px; */
  margin: 0 auto;
`;
