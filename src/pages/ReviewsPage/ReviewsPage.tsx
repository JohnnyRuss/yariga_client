/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";

import Helmet from "pages/Helmet";
import Reviews from "components/Reviews/ReviewsBox";
import AppLayout from "components/AppLayout/AppLayout";

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
        <Reviews />
      </AppLayout>
    </>
  );
};

export default ReviewsPage;
