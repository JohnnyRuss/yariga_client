import { useLocation, useNavigate } from "react-router-dom";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationT {
  currentPage: number;
  pagesCount: number;
}

const Pagination: React.FC<PaginationT> = ({ currentPage, pagesCount }) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const urlSearchParams = new URLSearchParams(search);

  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    urlSearchParams.set("page", value.toString());
    navigate(`${pathname}?${urlSearchParams.toString()}`);
  };

  return (
    <MuiPagination
      count={pagesCount}
      page={currentPage}
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
