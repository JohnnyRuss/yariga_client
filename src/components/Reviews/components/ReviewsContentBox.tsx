import { Stack } from "@mui/material";

type ReviewsContentBoxT = {
  children: React.ReactNode;
};

const ReviewsContentBox: React.FC<ReviewsContentBoxT> = ({ children }) => {
  return (
    <Stack
      flex={1}
      height="100%"
      gap={{ xs: 1, md: 3 }}
      minHeight={{ xs: "100%", md: "35vw" }}
      data-reviews-content-box
    >
      {children}
    </Stack>
  );
};

export default ReviewsContentBox;
