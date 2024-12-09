import { useSearchParams } from "hooks/utils";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationT {
  currentPage: number;
  pagesCount: number;
}

const Pagination: React.FC<PaginationT> = ({ currentPage, pagesCount }) => {
  const { appendParam } = useSearchParams();

  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    appendParam("page", value.toString());
  };

  return (
    <MuiPagination
      count={pagesCount || 1}
      page={currentPage || 1}
      siblingCount={1}
      onChange={onPageChange}
      shape="rounded"
      sx={{
        "li:has(.Mui-selected)": {
          backgroundColor: "app_blue.light",
          borderRadius: "4px",
        },

        "li .Mui-selected": {
          color: "app_text.light",
        },
      }}
    />
  );
};

export default Pagination;
