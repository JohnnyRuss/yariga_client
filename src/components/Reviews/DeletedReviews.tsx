import React from "react";

import { Stack, Box } from "@mui/material";
import { Pagination } from "components/Layouts";
import ReviewsList from "./components/ReviewsList";

interface DeletedReviewsT {}

const DeletedReviews: React.FC<DeletedReviewsT> = (props) => {
  return (
    <Stack
      minHeight="35vw"
      className="content__box"
      sx={{ backgroundColor: "unset", padding: 0 }}
    >
      <ReviewsList loading={false} />

      <Box mt="auto" ml="auto">
        <Pagination page={1} />
      </Box>
    </Stack>
  );
};

export default DeletedReviews;
