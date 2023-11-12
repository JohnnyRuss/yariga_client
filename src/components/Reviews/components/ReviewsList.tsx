import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Grid } from "@mui/material";
import { ReviewCard, ReviewCardSkeleton } from "components/Layouts";

interface ReviewsListT {
  loading: boolean;
}

const ReviewsList: React.FC<ReviewsListT> = ({ loading }) => {
  return loading ? (
    <Grid container spacing={3}>
      {Array.from(new Array(12)).map(() => (
        <Grid item key={nanoid()} xs={12}>
          <ReviewCardSkeleton />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
      <Grid item xs={12}>
        <ReviewCard />
      </Grid>
    </Grid>
  );
};

export default ReviewsList;
