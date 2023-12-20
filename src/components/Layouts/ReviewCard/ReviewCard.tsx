import { useEffect, useRef } from "react";

import * as UI from "./components";
import { Stack } from "@mui/material";

import { StateReviewT } from "interface/store/review.types";

interface ReviewCardT {
  review: StateReviewT;
  showActions?: boolean;
  scrollToView?: boolean;
}

const ReviewCard: React.FC<ReviewCardT> = ({
  review,
  showActions = true,
  scrollToView = false,
}) => {
  const reviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollToView) return;

    reviewRef.current?.scrollIntoView({ block: "center", behavior: "auto" });
  }, [scrollToView]);

  return (
    <div ref={reviewRef}>
      <Stack
        p={{ xs: "5px", md: "25px" }}
        pb={{ xs: "15px", md: "30px" }}
        gap={{ xs: "15px", md: "30px" }}
        borderRadius={{ xs: "0px", md: "20px" }}
        borderBottom={{ xs: "1px solid", md: "none" }}
        style={{ borderColor: "#e4e8ef" }}
        bgcolor="app_bg.main"
        direction={{ xs: "column", md: "row" }}
      >
        <UI.ReviewAuthor author={review.user} />

        <UI.ReviewContent description={review.review} score={review.score} />

        <Stack ml={{ md: "auto" }} gap="15px">
          <UI.ReviewRating score={review.score} />

          {showActions && (
            <UI.ReviewActions
              reviewId={review._id}
              approved={review.approved}
              property={review.property}
            />
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default ReviewCard;
