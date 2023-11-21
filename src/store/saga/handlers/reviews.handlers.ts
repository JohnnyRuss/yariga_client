import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import * as reviewsAPI from "store/saga/api/reviews.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  AddReviewArgsT,
  AddReviewResponseT,
  GetReviewsArgsT,
  GetReviewsResponseT,
  ApproveReviewArgsT,
} from "interface/db/reviews.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { reviewsActions } from "store/reducers/review.reducer";
import { ApproveReviewActionT } from "interface/store/review.types";

export function* addReview({ payload }: PayloadAction<AddReviewArgsT>) {
  try {
    const { data }: AxiosResponse<AddReviewResponseT> = yield call(
      reviewsAPI.addReviewQuery,
      payload
    );

    yield put(propertiesActions.setPropertyRate(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "addReview",
    });
  }
}

export function* getReviews({ payload }: PayloadAction<GetReviewsArgsT>) {
  try {
    const { data }: AxiosResponse<GetReviewsResponseT> = yield call(
      reviewsAPI.getReviewsQuery,
      payload
    );

    yield put(reviewsActions.setReviews(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getReviews",
      errorSetter: reviewsActions.setReviewsStatus,
    });
  }
}

export function* approveReview({
  payload,
}: PayloadAction<ApproveReviewActionT>) {
  try {
    const queryParams: ApproveReviewArgsT = {
      query: payload.query,
      reviewId: payload.reviewId,
    };

    yield call(reviewsAPI.approveReviewQuery, queryParams);

    yield put(reviewsActions.setApprovedReview(payload));
  } catch (error: any) {
    yield setError({
      error,
      location: "approveReview",
    });
  }
}
