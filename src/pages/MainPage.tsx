import MainBanner from "../containers/mainPage/MainBanner";
import BestProdList from "../containers/mainPage/BestProdList";
import SocialLinkList from "../containers/mainPage/SocialLinkList";
import NewProdList from "../containers/mainPage/NewProdList";
import Mission from "../containers/mainPage/Mission";
import Jisok from "../containers/mainPage/Jisok";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <BestProdList />
      <SocialLinkList />
      <NewProdList />
      <Mission />
      <Jisok />
    </>
  );
};
export default MainPage;
