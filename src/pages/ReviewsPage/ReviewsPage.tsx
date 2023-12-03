/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import Reviews from "components/Reviews/ReviewsBox";

RouterHistory.redirectUnAuthorized();

const ReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.reviews_page) navigate(PATHS.all_reviews_page);
  }, []);

  return (
    <>
      <Helmet
        title="Reviews"
        disAllowCrawler={true}
        path={PATHS.reviews_page}
        description="reviews got user on all of the properties from other users"
      />
      <Reviews />;
    </>
  );
};

export default ReviewsPage;
