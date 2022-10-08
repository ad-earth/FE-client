import * as t from "./CateDrop.style";

const CateDrop = ({
  sort,
  sortChange,
}: {
  sort: string;
  sortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <>
      <t.BtnArea>
        <t.DropBtn
          name="select"
          id="select"
          defaultValue="like"
          onChange={sortChange}
          value={sort}
        >
          <option value="recent">등록순</option>
          <option value="like">인기순</option>
          <option value="minprice">낮은가격순</option>
          <option value="maxprice">높은가격순</option>
        </t.DropBtn>
      </t.BtnArea>
    </>
  );
};

export default CateDrop;
