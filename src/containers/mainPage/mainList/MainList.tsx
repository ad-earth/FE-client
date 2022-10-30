import { useMemo } from "react";
import { useGetMainListQuery } from "./useGetMainListQuery";
import BestProducts from "../../../components/mainPage/bestProducts/BestProducts";
import MainLinks from "../../../components/mainPage/mainLinks/MainLinks";
import NewProducts from "../../../components/mainPage/newProducts/NewProducts";

const MainList = () => {
  const mainQuery = useGetMainListQuery();

  const { bestList, newList } = useMemo(
    () => ({
      bestList: mainQuery.data?.data.Best,
      newList: mainQuery.data?.data.New,
    }),
    [mainQuery]
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
