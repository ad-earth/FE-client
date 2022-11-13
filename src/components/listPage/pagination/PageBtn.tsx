import * as t from "./pageBtn.sytle";
import { PaginationItem } from "@mui/material";
import { editPagNo } from "../../../redux/reducer/listSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const PageBtn = ({ cnt }: { cnt: number }) => {
  //-- reducer
  const dispatch = useAppDispatch();
  const { pageNo } = useAppSelector((state) => state.listSlice);
  //-- 페이지 갯수
  const pageNum = Math.ceil(cnt / 20);
  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    dispatch(editPagNo(value));
  };

  return (
    <>
      <t.AreaPage>
        <t.PaginationRoot
          count={pageNum}
          defaultPage={1}
          page={pageNo}
          onChange={onPageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </t.AreaPage>
    </>
  );
};

export default PageBtn;
