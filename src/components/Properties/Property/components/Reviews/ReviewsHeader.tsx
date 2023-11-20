import { Stack, Typography } from "@mui/material";
import { Button } from "components/Layouts";

interface ReviewsHeaderT {
  containerRef: (node?: Element | null | undefined) => void;
  showReviews: boolean;
  setShowReviews: React.Dispatch<React.SetStateAction<boolean>>;
  reviewsCount: number;
}

const ReviewsHeader: React.FC<ReviewsHeaderT> = ({
  containerRef,
  showReviews,
  setShowReviews,
  reviewsCount,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      ref={containerRef}
      data-reviews-header
    >
      <Typography
        mb="25px"
        fontSize={18}
        fontWeight={600}
        sx={{ transform: "translateY(55%)" }}
      >
        Reviews
      </Typography>

      <Button
        onClick={() => setShowReviews((prev) => !prev)}
        title={showReviews ? "Hide Reviews" : `Show Reviews (${reviewsCount})`}
        variant="outlined"
        color="app_text.main"
        attributes={{
          sx: {
            borderColor: "app_text.main",
            "&:hover": {
              borderColor: "app_text.main",
            },
          },
        }}
      />
    </Stack>
  );
};

export default ReviewsHeader;
