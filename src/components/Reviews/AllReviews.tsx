import React from "react";

import { Stack, Box } from "@mui/material";
import { Pagination } from "components/Layouts";
import ReviewsList from "./components/ReviewsList";

interface AllReviewsT {}

const AllReviews: React.FC<AllReviewsT> = (props) => {
  return (
    <Stack
      minHeight="35vw"
      gap={3}
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

export default AllReviews;
