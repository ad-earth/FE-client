import CateButton from "../components/listPage/cateButton/CateButton";
import PageBtn from "../components/listPage/pagination/PageBtn";
import CardList from "../containers/listPage/cardList/CardList";

export const ListPage = () => {
  return (
    <>
      <CateButton />
      <CardList />
      <PageBtn />
    </>
  );
};
export default ListPage;
