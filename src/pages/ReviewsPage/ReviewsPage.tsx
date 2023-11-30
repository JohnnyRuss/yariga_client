/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Reviews from "components/Reviews/ReviewsBox";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const ReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.reviews_page) navigate(PATHS.all_reviews_page);
  }, []);

  return <Reviews />;
};

export default ReviewsPage;
