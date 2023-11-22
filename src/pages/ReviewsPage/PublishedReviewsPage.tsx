/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useReviewsQuery from "hooks/api/reviews/useReviewsQuery";

import PublishedReviews from "components/Reviews/PublishedReviews";

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

    getReviews({ query: search, approved: "1" });

    return () => {
      cleanUpReviews();
    };
  }, [search]);

  return <PublishedReviews />;
};

export default PublishedReviewsPage;
