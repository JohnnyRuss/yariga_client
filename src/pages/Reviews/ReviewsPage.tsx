/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";
const Reviews = lazy(() => import("components/Reviews/ReviewsBox"));

const ReviewsPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.reviews_page) navigate(PATHS.all_reviews_page);
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Reviews"
        disAllowCrawler={true}
        path={PATHS.reviews_page}
        description="reviews got user on all of the properties from other users"
      />

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <Reviews />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default ReviewsPage;
