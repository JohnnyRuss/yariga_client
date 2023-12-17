import * as UI from "./components";
import { Stack } from "@mui/material";

import { ReviewShortInfoT } from "interface/db/reviews.types";

interface ReviewCardT {
  review: ReviewShortInfoT;
  showActions?: boolean;
}

const ReviewCard: React.FC<ReviewCardT> = ({ review, showActions = true }) => {
  return (
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
          <UI.ReviewActions approved={review.approved} reviewId={review._id} />
        )}
      </Stack>
    </Stack>
  );
};

export default ReviewCard;
