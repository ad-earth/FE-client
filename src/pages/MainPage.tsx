import MainBanner from "../containers/mainPage/mainBanner/MainBanner";
import BestProd from "../containers/mainPage/bestProd/BestProd";
import SocialLinkList from "../containers/mainPage/socialLinkList/SocialLinkList";
import NewProdList from "../containers/mainPage/newProdList/NewProdList";
import Mission from "../containers/mainPage/mission/Mission";
import Jisok from "../containers/mainPage/jisok/Jisok";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <BestProd />
      <SocialLinkList />
      <NewProdList />
      <Mission />
      <Jisok />
    </>
  );
};
export default MainPage;
