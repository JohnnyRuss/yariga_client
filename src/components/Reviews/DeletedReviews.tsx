import { Stack } from "@mui/material";
import ReviewsList from "./components/ReviewsList";
import ReviewsPagination from "./components/ReviewsPagination";

const DeletedReviews: React.FC = () => {
  return (
    <Stack
      minHeight="35vw"
      className="content__box"
      sx={{ backgroundColor: "unset", padding: 0 }}
    >
      <ReviewsList />

      <ReviewsPagination />
    </Stack>
  );
};

export default DeletedReviews;
