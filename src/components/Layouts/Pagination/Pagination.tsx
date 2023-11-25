import { useLocation, useNavigate } from "react-router-dom";

import { useScrollTo } from "hooks/utils";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationT {
  currentPage: number;
  pagesCount: number;
  scrollTopOnChange?: boolean;
}

const Pagination: React.FC<PaginationT> = ({
  currentPage,
  pagesCount,
  scrollTopOnChange = true,
}) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const { windowScrollToTop } = useScrollTo();

  const urlSearchParams = new URLSearchParams(search);

  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    urlSearchParams.set("page", value.toString());
    navigate(`${pathname}?${urlSearchParams.toString()}`);

    if (scrollTopOnChange) windowScrollToTop();
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
