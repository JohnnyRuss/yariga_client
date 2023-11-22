import { Box } from "@mui/material";
import ReviewsNav from "./ReviewsNav";
import { SectionTitle } from "components/Layouts";

interface ReviewsHeaderT {}

const ReviewsHeader: React.FC<ReviewsHeaderT> = (props) => {
  return (
    <Box
      zIndex={9}
      top="15px"
      height="115px"
      position="sticky"
      sx={{ backgroundColor: "app_bg.dark" }}
    >
      <SectionTitle title="Reviews List" />

      <Box pb="15px" sx={{ backgroundColor: "app_bg.dark" }}>
        <ReviewsNav />
      </Box>
    </Box>
  );
};

export default ReviewsHeader;
