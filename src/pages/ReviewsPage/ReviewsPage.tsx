/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Reviews from "components/Reviews/ReviewsBox";

import { paths } from "config/paths";
import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const ReviewsPage: React.FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === paths.reviews_page) navigate(paths.all_reviews_page);
  }, []);

  return <Reviews />;
};

export default ReviewsPage;
