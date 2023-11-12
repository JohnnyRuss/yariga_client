import React from "react";

import DeletedReviews from "components/Reviews/DeletedReviews";

interface DeletedReviewsPageT {}

const DeletedReviewsPage: React.FC<DeletedReviewsPageT> = (props) => {
  return <DeletedReviews />;
};

export default DeletedReviewsPage;
