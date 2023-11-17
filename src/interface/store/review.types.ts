import { LoadingStatusT } from "./common.types";
import { ReviewShortInfoT } from "interface/db/reviews.types";
import { ApproveReviewArgsT } from "interface/db/reviews.types";

type ReviewsStateT = {
  status: LoadingStatusT;
  reviews: Array<ReviewShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

type ApproveReviewActionT = ApproveReviewArgsT & {
  filterOut: boolean;
};

export type { ReviewsStateT, ApproveReviewActionT };
