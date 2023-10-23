import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationT {
  page: number;
}

const Pagination: React.FC<PaginationT> = ({ page }) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const urlSearchParams = new URLSearchParams(search);

  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    urlSearchParams.set("page", value.toString());
    navigate(`${pathname}?${urlSearchParams.toString()}`);
  };

  return (
    <MuiPagination
      count={5}
      page={page}
      siblingCount={1}
      onChange={onPageChange}
      shape="rounded"
      sx={{
        ".Mui-selected": {
          backgroundColor: "app_blue.light",
          color: "app_text.light",
        },
      }}
    />
  );
};

export default Pagination;
