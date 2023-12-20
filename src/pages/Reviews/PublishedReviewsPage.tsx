/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useReviewsQuery from "hooks/api/reviews/useReviewsQuery";

import { Spinner } from "components/Layouts";
const PublishedReviews = lazy(
  () => import("components/Reviews/PublishedReviews")
);

const PublishedReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  const { search, pathname } = useLocation();
  const urlSearchParams = new URLSearchParams(search);

  const { getReviews, cleanUpReviews } = useReviewsQuery();

  useEffect(() => {
    const existingPage = urlSearchParams.get("page");

    if (!existingPage) {
      urlSearchParams.set("page", "1");
      return navigate(`${pathname}?${urlSearchParams.toString()}`);
    }

    getReviews({ query: search.replace("?", ""), approved: "1" });

    return () => {
      cleanUpReviews();
    };
  }, [search]);

  return (
    <Suspense fallback={<Spinner />}>
      <PublishedReviews />
    </Suspense>
  );
};

export default PublishedReviewsPage;
