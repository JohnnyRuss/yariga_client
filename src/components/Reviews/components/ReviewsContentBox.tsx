import { Stack } from "@mui/material";

type ReviewsContentBoxT = {
  children: React.ReactNode;
};

const ReviewsContentBox: React.FC<ReviewsContentBoxT> = ({ children }) => {
  return (
    <Stack
      minHeight="35vw"
      gap={3}
      className="content__box"
      sx={{ backgroundColor: "unset", padding: 0 }}
    >
      {children}
    </Stack>
  );
};

export default ReviewsContentBox;
