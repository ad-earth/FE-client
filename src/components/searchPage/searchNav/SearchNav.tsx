import * as t from "./searchNav.style";

const SearchNav = () => {
  return (
    <>
      <t.LineDiv>
        <span>검색결과</span>
      </t.LineDiv>
    </>
  );
};

const EmptyDiv = ({ message }: { message: string }) => {
  return (
    <t.EmptyDiv>
      <span>{message}</span>
    </t.EmptyDiv>
  );
};

export { SearchNav, EmptyDiv };
