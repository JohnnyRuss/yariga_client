import React from "react";

import { Button, Stack } from "@mui/material";

interface ReviewActionsT {}

const ReviewActions: React.FC<ReviewActionsT> = (props) => {
  return (
    <Stack direction="row" gap="15px">
      <Button
        sx={{
          color: "error.main",
          borderColor: "error.main",
          border: "1px solid",
          borderRadius: "18px",
          padding: "7px 10px",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Reject
      </Button>

      <Button
        sx={{
          color: "app_text.light",
          backgroundColor: "app_green.main",
          borderRadius: "18px",
          padding: "7px 10px",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Approve
      </Button>
    </Stack>
  );
};

export default ReviewActions;
