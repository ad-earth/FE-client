import { Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "./pageBtn.sytle";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { editPagNo } from "../../../redux/reducer/listSlice";

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
      <AreaPage>
        <Pagination
          count={pageNum}
          defaultPage={1}
          page={pageNo}
          onChange={onPageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </AreaPage>
    </>
  );
};

export default PageBtn;
