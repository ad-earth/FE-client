import { useEffect } from "react";

import Navigation from "../components/detailPage/navigation/Navigation";
import Details from "../containers/detailPage/details/Details";
import ProdContents from "../containers/detailPage/prodContents/ProdContents";

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <Details />
      <ProdContents />
    </>
  );
};
export default DetailPage;
