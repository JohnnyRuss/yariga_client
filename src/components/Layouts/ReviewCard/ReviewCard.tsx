import { Stack } from "@mui/material";
import ReviewAuthor from "./components/ReviewAuthor";
import ReviewContent from "./components/ReviewContent";
import ReviewRating from "./components/ReviewRating";
import ReviewActions from "./components/ReviewActions";

import { ReviewShortInfoT } from "interface/db/reviews.types";

interface ReviewCardT {
  review: ReviewShortInfoT;
  showActions?: boolean;
}

const ReviewCard: React.FC<ReviewCardT> = ({ review, showActions = true }) => {
  return (
    <Stack
      p="25px"
      pb="30px"
      gap="30px"
      borderRadius="20px"
      bgcolor="app_bg.main"
      direction={{ xs: "column", md: "row" }}
    >
      <ReviewAuthor author={review.user} />

      <ReviewContent description={review.review} score={review.score} />

      <Stack ml={{ md: "auto" }} gap="15px">
        <ReviewRating score={review.score} />

        {showActions && (
          <ReviewActions approved={review.approved} reviewId={review._id} />
        )}
      </Stack>
    </Stack>
  );
};

export default ReviewCard;
