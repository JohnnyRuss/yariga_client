import { useAppSelector } from "store/hooks";

import { selectReviewsPagination } from "store/selectors/reviews.selectors";

import { Box } from "@mui/material";
import { Pagination } from "components/Layouts";

const ReviewsPagination: React.FC = () => {
  const { currentPage, pagesCount } = useAppSelector(selectReviewsPagination);

  return (
    <Box mt="auto" ml="auto">
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    </Box>
  );
};

export default ReviewsPagination;
