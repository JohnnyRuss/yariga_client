import { PROPERTY_STATUS } from "./properties.types";

type ReviewShortInfoT = {
  _id: string;
  approved: boolean;
  review: string;
  score: number;
  property: ReviewPropertyT;
  user: ReviewAuthorT;
};

// PARTIALS
type ReviewPropertyT = {
  _id: string;
  title: string;
  propertyStatus: keyof typeof PROPERTY_STATUS;
  price: number;
};

type ReviewAuthorT = {
  _id: string;
  avatar: string;
  username: string;
  createdAt?: string;
};

// API
type AddReviewArgsT = {
  propertyId: string;
  data: { score: number; review?: string };
};

type AddReviewResponseT = {
  avgRating: number;
};

type GetReviewsArgsT = {
  query: string;
  approved: "all" | "1" | "0";
};

type GetReviewsResponseT = {
  reviews: Array<ReviewShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

type ApproveReviewArgsT = {
  query: "1" | "0";
  reviewId: string;
};

export type {
  ReviewShortInfoT,
  // PARTIALS
  ReviewAuthorT,
  // API
  AddReviewArgsT,
  AddReviewResponseT,
  GetReviewsArgsT,
  GetReviewsResponseT,
  ApproveReviewArgsT,
};
