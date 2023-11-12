import React, { useState } from "react";

import {
  Box,
  Stack,
  Rating as MuiRating,
  Typography,
  TextField,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Modal, Button } from "components/Layouts";

interface RatingT {}

const Rating: React.FC<RatingT> = () => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

  const onRatingChange = (
    event: React.SyntheticEvent,
    value: number | null
  ) => {
    // 1. send rate request
    // 2. open modal to give user chance to leave feedback
    setOpenFeedbackModal(true);
  };

  const onSendFeedBack = (event: React.MouseEvent) => {
    setOpenFeedbackModal(false);
  };

  return (
    <>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <MuiRating
          name="text-feedback"
          value={4.5}
          onChange={onRatingChange}
          precision={0.5}
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{4.8}</Box>
      </Box>

      <Modal
        open={openFeedbackModal}
        onClose={() => setOpenFeedbackModal(false)}
      >
        <Stack
          gap={3}
          overflow="hidden"
          borderRadius="18px"
          bgcolor="app_bg.main"
          justifyContent="space-between"
          width={{ xs: "90vw", md: "30vw" }}
          minHeight={{ xs: "300px", md: "200px" }}
          p={{ xs: "45px 25px 25px", md: "30px 25px 25px" }}
        >
          <Typography fontSize={26} fontWeight={600}>
            Give feedback to owner
          </Typography>

          <TextField
            multiline
            fullWidth
            minRows={3}
            maxRows={6}
            placeholder="Your feedback here..."
            inputProps={{
              className: "custom_scrollbar",
            }}
          />

          <Button
            title="Send"
            fullWidth={true}
            attributes={{ sx: { flex: "none" } }}
            onClick={onSendFeedBack}
          />
        </Stack>
      </Modal>
    </>
  );
};

export default Rating;
