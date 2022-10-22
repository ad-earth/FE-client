import { useMemo } from "react";

import BestProducts from "../../../components/mainPage/bestProducts/BestProducts";
import MainLinks from "../../../components/mainPage/mainLinks/MainLinks";
import NewProducts from "../../../components/mainPage/newProducts/NewProducts";
import { useMainListQuery } from "./useMainListQuery";

const MainList = () => {
  const mainData = useMainListQuery();

  const { bestList, newList } = useMemo(
    () => ({
      bestList: mainData.data?.data.Best,
      newList: mainData.data?.data.New,
    }),
    [mainData]
  );

  return (
    <div>
      <BestProducts bestList={bestList} />
      <NewProducts newList={newList} />
      <MainLinks />
    </div>
  );
};

export default MainList;
