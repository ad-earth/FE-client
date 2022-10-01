import { useEffect } from "react";

import History from "../components/detailPage/history/History";
import ProdContents from "../containers/detailPage/prodContents/ProdContents";
import ProdInfo from "../containers/detailPage/prodInfo/ProdInfo";

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <History />
      <ProdInfo />
      <ProdContents />
    </>
  );
};
export default DetailPage;
