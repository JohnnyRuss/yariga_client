import * as UI from "./components";

const AllReviews: React.FC = () => {
  return (
    <UI.ReviewsContentBox>
      <UI.ReviewsList />

      <UI.ReviewsPagination />
    </UI.ReviewsContentBox>
  );
};

export default AllReviews;
