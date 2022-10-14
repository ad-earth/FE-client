import { Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "./pageBtn.sytle";
import { Dispatch, SetStateAction } from "react";

const PageBtn = ({
  cnt,
  page,
  setPage,
}: {
  cnt: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const pageNum = Math.ceil(cnt / 20);
  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <AreaPage>
        <Pagination
          count={pageNum}
          defaultPage={1}
          page={page}
          onChange={onPageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </AreaPage>
    </>
  );
};

export default PageBtn;
