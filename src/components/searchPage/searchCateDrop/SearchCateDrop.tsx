import * as t from "./searchCateDrop.style";

const SearchCateDrop = (props: { cnt: number }) => {
  return (
    <>
      <t.Grid>
        <t.Text>{props.cnt}개의 검색결과</t.Text>
      </t.Grid>
    </>
  );
};

export default SearchCateDrop;
