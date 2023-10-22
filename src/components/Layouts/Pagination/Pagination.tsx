import React from "react";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationT {}

const Pagination: React.FC<PaginationT> = (props) => {
  return <MuiPagination count={5} shape="rounded" color="primary" />;
};

export default Pagination;
