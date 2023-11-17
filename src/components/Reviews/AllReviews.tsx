import { Stack } from "@mui/material";
import ReviewsList from "./components/ReviewsList";
import ReviewsPagination from "./components/ReviewsPagination";

const AllReviews: React.FC = () => {
  return (
    <Stack
      minHeight="35vw"
      gap={3}
      className="content__box"
      sx={{ backgroundColor: "unset", padding: 0 }}
    >
      <ReviewsList />

      <ReviewsPagination />
    </Stack>
  );
};

export default AllReviews;
