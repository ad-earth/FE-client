import SearchBody from "../containers/searchPage/searchBody/SearchBody";
import SqSearchBar from "../elements/SqSearchBar";
import SPageBtn from "../components/searchPage/sPageBtn/SPageBtn";

const SearchPage: React.FC = () => {
  return (
    <>
      <SqSearchBar />
      <SearchBody />
      <SPageBtn />
    </>
  );
};
export default SearchPage;
