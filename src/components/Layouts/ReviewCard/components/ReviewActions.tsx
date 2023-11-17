import { useLocation } from "react-router-dom";

import { paths } from "config/paths";
import useReviewsQuery from "hooks/api/reviews/useReviewsQuery";

import { Button, Stack } from "@mui/material";

interface ReviewActionsT {
  approved: boolean;
  reviewId: string;
}

const buttonStyles = {
  border: "1px solid",
  borderRadius: "18px",
  padding: "7px 10px",
  fontSize: 12,
  fontWeight: 600,
  marginLeft: "auto",
};

const ReviewActions: React.FC<ReviewActionsT> = ({ approved, reviewId }) => {
  const { pathname } = useLocation();

  const { approveReview } = useReviewsQuery();

  const onApprove = (query: "1" | "0") => {
    if (!query || !reviewId) return;

    const filterOut = new RegExp(paths.all_reviews_page).test(pathname);

    approveReview({ query, reviewId, filterOut: !filterOut });
  };

  return (
    <Stack direction="row" gap="15px">
      {approved && (
        <Button
          onClick={() => onApprove("0")}
          sx={{
            color: "error.main",
            borderColor: "error.main",
            ...buttonStyles,
          }}
        >
          Reject
        </Button>
      )}

      {!approved && (
        <Button
          onClick={() => onApprove("1")}
          sx={{
            color: "app_text.light",
            backgroundColor: "app_green.main",
            ...buttonStyles,

            "&:hover": {
              color: "app_text.light",
              backgroundColor: "app_green.main",
            },
          }}
        >
          Approve
        </Button>
      )}
    </Stack>
  );
};

export default ReviewActions;
