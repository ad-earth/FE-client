import { Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "./pageBtn.sytle";
import { Dispatch, SetStateAction, useState } from "react";

const PageBtn = ({
  cnt,
  setPage,
}: {
  setPage: Dispatch<SetStateAction<number>>;
  cnt: number;
}) => {
  const pageNum = Math.ceil(cnt / 20);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <>
      <AreaPage>
        <Pagination
          count={pageNum}
          defaultPage={1}
          onChange={onPageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </AreaPage>
    </>
  );
};

export default PageBtn;
