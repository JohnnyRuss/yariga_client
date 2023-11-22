import * as UI from "./components";

const PublishedReviews: React.FC = () => {
  return (
    <UI.ReviewsContentBox>
      <UI.ReviewsList />

      <UI.ReviewsPagination />
    </UI.ReviewsContentBox>
  );
};

export default PublishedReviews;
