import MainBanner from "../containers/mainPage/MainBanner";
import BestProdList from "../containers/mainPage/BestProdList";
import SocialLinkList from "../containers/mainPage/SocialLinkList";
import NewProdList from "../containers/mainPage/NewProdList";
import ShopGoal from "../containers/mainPage/ShopGoal";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <BestProdList />
      <SocialLinkList />
      <NewProdList />
      <ShopGoal />
    </>
  );
};
export default MainPage;
