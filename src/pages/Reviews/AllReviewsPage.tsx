/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import Helmet from "pages/Helmet";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import useReviewsQuery from "hooks/api/reviews/useReviewsQuery";

import { Spinner } from "components/Layouts";
const AllReviews = lazy(() => import("components/Reviews/AllReviews"));

const AllReviewsPage: React.FC = () => {
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

    getReviews({ query: search.replace("?", ""), approved: "all" });

    return () => {
      cleanUpReviews();
    };
  }, [search]);

  return (
    <>
      <Helmet
        title="Reviews"
        disAllowCrawler={true}
        path={PATHS.reviews_page}
        description="reviews got user on all of the properties from other users"
      />

      <Suspense fallback={<Spinner />}>
        <AllReviews />
      </Suspense>
    </>
  );
};

export default AllReviewsPage;
