import History from "../components/detailPage/history/History";
import ProdContents from "../containers/detailPage/prodContents/ProdContents";
import ProdInfo from "../containers/detailPage/prodInfo/ProdInfo";

const DetailPage = () => {
  return (
    <>
      <History />
      <ProdInfo />
      <ProdContents />
    </>
  );
};
export default DetailPage;
