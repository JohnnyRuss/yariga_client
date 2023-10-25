import React from "react";

import { Box } from "@mui/material";
import { Button } from "components/Layouts";

interface BookButtonT {}

const BookButton: React.FC<BookButtonT> = (props) => {
  return (
    <Box>
      <Button title="Book Now" fullWidth={true} />
    </Box>
  );
};

export default BookButton;
