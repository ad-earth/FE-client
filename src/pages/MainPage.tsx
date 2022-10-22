import MainBanner from "../containers/mainPage/mainBanner/MainBanner";
import Mission from "../containers/mainPage/mission/Mission";
import Jisok from "../containers/mainPage/jisok/Jisok";
import MainList from "../containers/mainPage/mainList/MainList";

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <MainList />
      <Mission />
      <Jisok />
    </>
  );
};
export default MainPage;
