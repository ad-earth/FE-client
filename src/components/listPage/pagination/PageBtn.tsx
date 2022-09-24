import { Stack, Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "./pageBtn.sytle";
import useSearchDataList from "../../../containers/searchPage/searchBody/useSearchBody";
import { useEffect, useState } from "react";
import { getSearch } from "../../../shared/apis/api";

const PageBtn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AreaPage>
        <Pagination
          // count={pageNum}
          defaultPage={1}
          onChange={onPageChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </AreaPage>
    </>
  );
};

export default PageBtn;
