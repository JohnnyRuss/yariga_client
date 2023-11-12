import React from "react";
import { Outlet } from "react-router-dom";

import { ContentBox } from "components/Layouts";
import ReviewsHeader from "./components/ReviewsHeader";

const ReviewsBox: React.FC = () => {
  return (
    <ContentBox>
      <ReviewsHeader />

      <Outlet />
    </ContentBox>
  );
};

export default ReviewsBox;
