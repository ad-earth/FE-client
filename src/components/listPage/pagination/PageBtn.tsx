import { Stack, Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "./pageBtn.sytle";
import { useSearchDataList } from "../../../containers/searchPage/searchBody/useSearchBody";
import { useEffect, useState } from "react";
import { getSearch } from "../../../shared/apis/api";

const PageBtn = () => {
  const NumData = useSearchDataList();
  // cnt / 20 -> 반올림 4.5 => 5 페이지 총 5개
  // cnt / maxpost = val
  // val 반올림처리 한 값 === 총 페이지 수
  const pageNum = Math.ceil(NumData / 20);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
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
// for (let i = 0; i < SearchListData.length; i++) {
//   console.log("i : ", SearchListData[i]);
// }
