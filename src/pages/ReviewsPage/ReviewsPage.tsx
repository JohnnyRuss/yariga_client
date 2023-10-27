import React from "react";

import Reviews from "components/Reviews/Reviews";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const ReviewsPage: React.FC = () => {
  return <Reviews />;
};

export default ReviewsPage;
