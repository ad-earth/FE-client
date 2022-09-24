import { Pagination, PaginationItem } from "@mui/material";
import { AreaPage } from "../../listPage/pagination/pageBtn.sytle";
import { useState } from "react";

const SPageBtn = (props: { cnt: number }) => {
  const pageNum = Math.ceil(props.cnt / 20);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {props.cnt && (
        <AreaPage>
          <Pagination
            count={pageNum}
            defaultPage={1}
            onChange={onPageChange}
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </AreaPage>
      )}
    </>
  );
};

export default SPageBtn;
