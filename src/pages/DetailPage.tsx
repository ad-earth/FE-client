import { useEffect } from "react";
import Navigation from "../components/detailPage/navigation/Navigation";
import Details from "../containers/detailPage/details/Details";
import Contents from "../containers/detailPage/contents/Contents";

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Details />
      <Contents />
    </>
  );
};
export default DetailPage;
