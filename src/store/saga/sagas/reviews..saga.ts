import { takeLatest } from "redux-saga/effects";

import { reviewsActions } from "store/reducers/review.reducer";
import * as reviewsHandlers from "store/saga/handlers/reviews.handlers";

export default function* reviewsSaga() {
  yield takeLatest(reviewsActions.addReview, reviewsHandlers.addReview);

  yield takeLatest(reviewsActions.getReviews, reviewsHandlers.getReviews);

  yield takeLatest(reviewsActions.approveReview, reviewsHandlers.approveReview);
}
