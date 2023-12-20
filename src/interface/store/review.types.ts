import {
  ApproveReviewArgsT,
  ReviewPropertyT,
  ReviewShortInfoT,
} from "interface/db/reviews.types";
import { LoadingStatusT } from "./common.types";

type ReviewsStateT = {
  status: LoadingStatusT;
  reviews: Array<StateReviewT>;
  currentPage: number;
  pagesCount: number;
};

type StateReviewT = Omit<ReviewShortInfoT, "property"> & {
  property: Omit<ReviewPropertyT, "images"> & { thumbnail: string };
};

type ReviewPropertyInfoT = Omit<ReviewPropertyT, "images"> & {
  thumbnail: string;
};

type ApproveReviewActionT = ApproveReviewArgsT & {
  filterOut: boolean;
};

export type {
  StateReviewT,
  ReviewsStateT,
  ApproveReviewActionT,
  ReviewPropertyInfoT,
};
