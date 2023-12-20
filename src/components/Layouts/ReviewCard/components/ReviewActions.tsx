import { useLocation, useNavigate } from "react-router-dom";

import { PATHS, DYNAMIC_PATHS } from "config/paths";
import useReviewsQuery from "hooks/api/reviews/useReviewsQuery";

import { Button, Stack, Tooltip } from "@mui/material";
import PropertyTooltip from "./PropertyTooltip";

import { ReviewPropertyInfoT } from "interface/store/review.types";

interface ReviewActionsT {
  approved: boolean;
  reviewId: string;
  property: ReviewPropertyInfoT;
}

const buttonStyles = {
  border: "1px solid",
  borderRadius: "18px",
  padding: "7px 10px",
  fontSize: 12,
  fontWeight: 600,
  marginLeft: "auto",
};

const ReviewActions: React.FC<ReviewActionsT> = ({
  approved,
  reviewId,
  property,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { approveReview } = useReviewsQuery();

  const onApprove = (query: "1" | "0") => {
    if (!query || !reviewId) return;

    const filterOut = new RegExp(PATHS.all_reviews_page).test(pathname);

    approveReview({ query, reviewId, filterOut: !filterOut });
  };

  const onViewProperty = () =>
    navigate(DYNAMIC_PATHS.property_page(property._id), {
      state: { reviewId },
    });

  return (
    <Stack direction="row" gap="15px" justifyContent="flex-end">
      <Tooltip
        title={<PropertyTooltip property={property} reviewId={reviewId} />}
      >
        <Button
          onClick={onViewProperty}
          sx={{
            color: "app_text.light",
            backgroundColor: "app_blue.light",
            ...buttonStyles,

            "&:hover": {
              color: "app_text.light",
              backgroundColor: "app_blue.light",
            },
          }}
        >
          VIEW PROPERTY
        </Button>
      </Tooltip>

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
