import React from "react";

import { Stack, Avatar, Typography } from "@mui/material";

interface ReviewAuthorT {}

const ReviewAuthor: React.FC<ReviewAuthorT> = (props) => {
  return (
    <Stack direction="row" gap="15px">
      <Avatar
        variant="square"
        sx={{
          width: "70px",
          height: "70px",
          borderRadius: "10px",
        }}
        src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1309"
      />

      <Stack>
        <Typography fontWeight={600}>James Sullivan</Typography>
        <Typography fontSize={14} color="app_text.main">
          Join On 25-04-2022
        </Typography>
        <Typography fontSize={14} color="app_text.main">
          12:42 PM
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ReviewAuthor;
