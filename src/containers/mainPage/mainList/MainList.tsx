import { useMemo } from "react";

import BestProducts from "../../../components/mainPage/bestProducts/BestProducts";
import MainLinks from "../../../components/mainPage/mainLinks/MainLinks";
import NewProducts from "../../../components/mainPage/newProducts/NewProducts";
import { useGetMainListQuery } from "./useGetMainListQuery";

const MainList = () => {
  const mainData = useGetMainListQuery();

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
      <MainLinks />
      <NewProducts newList={newList} />
    </div>
  );
};

export default MainList;
