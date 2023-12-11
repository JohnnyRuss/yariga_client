import {
  AddReviewArgsT,
  GetReviewsArgsT,
  ApproveReviewArgsT,
} from "interface/db/reviews.types";
import { axiosPrivateQuery } from "services/axios";

export async function addReviewQuery({ data, propertyId }: AddReviewArgsT) {
  return axiosPrivateQuery.post(`/reviews/${propertyId}`, data);
}

export async function getReviewsQuery({ query, approved }: GetReviewsArgsT) {
  return axiosPrivateQuery.get(
    `/reviews?approved=${approved}&limit=12${query ? `&${query}` : ""}`
  );
}

export async function approveReviewQuery({
  query,
  reviewId,
}: ApproveReviewArgsT) {
  return axiosPrivateQuery.post(
    `/reviews/${reviewId}/approve?approved=${query}`
  );
}
