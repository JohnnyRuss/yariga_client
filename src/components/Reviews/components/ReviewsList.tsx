import { useAppSelector } from "store/hooks";
import { nanoid } from "@reduxjs/toolkit";

import {
  selectReviews,
  selectReviewsStatus,
} from "store/selectors/reviews.selectors";

import {
  ReviewCard,
  ReviewCardSkeleton,
  NoContentMessage,
} from "components/Layouts";
import { Grid } from "@mui/material";

const ReviewsList: React.FC = () => {
  const status = useAppSelector(selectReviewsStatus);

  const reviews = useAppSelector(selectReviews);

  return status.loading ? (
    <Grid container spacing={3}>
      {Array.from(new Array(12)).map(() => (
        <Grid item key={nanoid()} xs={12}>
          <ReviewCardSkeleton />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container spacing={3}>
      {reviews[0] ? (
        reviews.map((review) => (
          <Grid item xs={12} key={review._id}>
            <ReviewCard review={review} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <NoContentMessage message="There are no reviews yet." />
        </Grid>
      )}
    </Grid>
  );
};

export default ReviewsList;
