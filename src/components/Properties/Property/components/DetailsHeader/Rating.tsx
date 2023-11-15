import React, { useState } from "react";

import { usePropertyRatingQuery } from "hooks/api/properties";

import { Star } from "@mui/icons-material";
import { Box, Rating as MuiRating } from "@mui/material";

import RatingModal from "./RatingModal";

interface RatingT {
  rating: number;
  propertyId: string;
}

const Rating: React.FC<RatingT> = ({ rating, propertyId }) => {
  const { rateProperty } = usePropertyRatingQuery();

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [ratingScore, setRatingScore] = useState<number>(NaN);
  const [feedback, setFeedback] = useState("");

  const onRatingChange = (
    event: React.SyntheticEvent,
    value: number | null
  ) => {
    if (!value || !propertyId) return;

    setOpenFeedbackModal(true);
    setRatingScore(value);
  };

  const onFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFeedback(e.target.value);

  const cleanUpRatingStates = () => {
    setFeedback("");
    setRatingScore(NaN);
    setOpenFeedbackModal(false);
  };

  const onCloseFeedBack = () => {
    rateProperty({
      propertyId,
      data: { score: ratingScore, review: feedback },
    });

    cleanUpRatingStates();
  };

  const onSendFeedBack = () => {
    rateProperty({
      propertyId,
      data: { score: ratingScore, review: feedback },
    });

    cleanUpRatingStates();
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
          value={rating}
          onChange={onRatingChange}
          precision={0.5}
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{rating.toFixed(1)}</Box>
      </Box>

      <RatingModal
        isOpen={openFeedbackModal}
        onClose={onCloseFeedBack}
        feedback={feedback}
        onFeedbackChange={onFeedbackChange}
        onSendFeedBack={onSendFeedBack}
      />
    </>
  );
};

export default Rating;
