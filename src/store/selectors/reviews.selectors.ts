import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedStatus = ({ reviews }: RootStateT) => ({
  error: reviews.status.error,
  loading: reviews.status.loading,
  message: reviews.status.message,
  status: reviews.status.status,
});

const selectedReviewsPagination = ({ reviews }: RootStateT) => ({
  currentPage: reviews.currentPage,
  pagesCount: reviews.pagesCount,
});

// SELECTORS

const selectReviewsStatus = createSelector(selectedStatus, (status) => status);

const selectReviews = ({ reviews }: RootStateT) => reviews.reviews;

const selectReviewsPagination = createSelector(
  selectedReviewsPagination,
  (pagination) => pagination
);

export { selectReviews, selectReviewsStatus, selectReviewsPagination };
