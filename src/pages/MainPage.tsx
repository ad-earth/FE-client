import styled from "styled-components";
import BestProdList from "../containers/mainPage/BestProdList";
import MainBanner from "../containers/mainPage/MainBanner";
import Mission from "../containers/mainPage/Mission";
import NewProdList from "../containers/mainPage/NewProdList";
import SocialLinkList from "../containers/mainPage/SocialLinkList";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <MainContainer>
        <BestProdList />
        <SocialLinkList />
        <NewProdList />
        <Mission />
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  /* width: 1200px; */
  margin: 0 auto;
`;
