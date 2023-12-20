import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useParams, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { selectProperty } from "store/selectors/properties.selectors";

import ReviewsHeader from "./ReviewsHeader";
import { Box, Stack, Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material";
import { ReviewCard, NoContentMessage } from "components/Layouts";

interface ReviewsT {
  loading: boolean;
}

const Reviews: React.FC<ReviewsT> = ({ loading }) => {
  const { propertyId } = useParams();
  const { state } = useLocation();

  const receivedReviewId = state?.reviewId || "";

  const { reviews } = useAppSelector(selectProperty);

  const [showReviews, setShowReviews] = useState(
    receivedReviewId ? true : false
  );

  const { ref, inView } = useInView({ threshold: 0 });

  const onGoTop = () => {
    const doc = document.querySelector("[data-reviews-header]");

    if (doc) doc.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    return () => {
      setShowReviews(false);
    };
  }, [propertyId]);

  return (
    <Box>
      <ReviewsHeader
        containerRef={ref}
        showReviews={showReviews}
        setShowReviews={setShowReviews}
        reviewsCount={reviews.length}
      />

      {showReviews && (
        <Stack mt="15px" gap={1}>
          {reviews[0] ? (
            reviews.map((review) => (
              <ReviewCard
                review={review}
                key={review._id}
                showActions={false}
                scrollToView={receivedReviewId === review._id}
              />
            ))
          ) : (
            <NoContentMessage message="There are no reviews yet" />
          )}

          {!inView && (
            <Button
              onClick={onGoTop}
              sx={{
                position: "sticky",
                bottom: "40px",
                marginLeft: "auto",
                transform: "translateX(50%)",
              }}
            >
              <ArrowCircleUp sx={{ fontSize: "36px" }} />
            </Button>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Reviews;
