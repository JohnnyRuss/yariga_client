import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ReviewsStateT,
  ApproveReviewActionT,
} from "interface/store/review.types";
import {
  AddReviewArgsT,
  GetReviewsArgsT,
  GetReviewsResponseT,
} from "interface/db/reviews.types";

const initialState: ReviewsStateT = {
  status: status.default(),

  reviews: [],

  currentPage: 1,

  pagesCount: 1,
};

const reviewsSlice = createSlice({
  name: "yariga-reviews",
  initialState,
  reducers: {
    addReview: {
      prepare: (payload: AddReviewArgsT) => {
        const credentials: AddReviewArgsT = {
          propertyId: payload.propertyId,
          data: {
            score: payload.data.score,
          },
        };

        if (payload.data.review) credentials.data.review = payload.data.review;

        return { payload: credentials };
      },

      reducer: (state) => {},
    },

    getReviews: {
      prepare: (payload: GetReviewsArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setReviews(state, { payload }: PayloadAction<GetReviewsResponseT>) {
      state.reviews = payload.reviews.map((review) => ({
        ...review,
        property: {
          _id: review.property._id,
          price: review.property.price,
          title: review.property.title,
          thumbnail: review.property.images[0],
          propertyStatus: review.property.propertyStatus,
        },
      }));

      state.pagesCount = payload.pagesCount;
      state.currentPage = payload.currentPage;

      state.status = status.default();
    },

    setReviewsStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.status = setStatus({
        stage,
        message: message || "Failed to read reviews",
      });
    },

    cleanUpReviews(state) {
      state.reviews = initialState.reviews;
      state.currentPage = initialState.currentPage;
      state.pagesCount = initialState.pagesCount;
    },

    approveReview: {
      prepare: (payload: ApproveReviewActionT) => {
        return { payload };
      },

      reducer: (state) => {},
    },

    setApprovedReview(state, { payload }: PayloadAction<ApproveReviewActionT>) {
      const index = state.reviews.findIndex(
        (review) => review._id === payload.reviewId
      );

      if (index < 0) return;

      if (payload.filterOut)
        state.reviews = state.reviews.filter(
          (review) => review._id !== payload.reviewId
        );
      else state.reviews[index].approved = payload.query === "1" ? true : false;
    },
  },
});

export const reviewsActions = reviewsSlice.actions;
export default reviewsSlice.reducer;
