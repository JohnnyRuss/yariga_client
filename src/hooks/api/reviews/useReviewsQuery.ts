import { useAppDispatch } from "store/hooks";
import { reviewsActions } from "store/reducers/review.reducer";

import { ApproveReviewActionT } from "interface/store/review.types";
import { AddReviewArgsT, GetReviewsArgsT } from "interface/db/reviews.types";

export default function useReviewsQuery() {
  const dispatch = useAppDispatch();

  const addReview = ({ propertyId, data }: AddReviewArgsT) => {
    if (!propertyId || !data.score || isNaN(data.score)) return;
    dispatch(reviewsActions.addReview({ propertyId, data }));
  };

  const getReviews = (args: GetReviewsArgsT) =>
    dispatch(reviewsActions.getReviews(args));

  const cleanUpReviews = () => dispatch(reviewsActions.cleanUpReviews());

  const approveReview = (args: ApproveReviewActionT) =>
    dispatch(reviewsActions.approveReview(args));

  return { addReview, getReviews, cleanUpReviews, approveReview };
}
