import * as UI from "./components";

const DeletedReviews: React.FC = () => {
  return (
    <UI.ReviewsContentBox>
      <UI.ReviewsList />

      <UI.ReviewsPagination />
    </UI.ReviewsContentBox>
  );
};

export default DeletedReviews;
