import { Box } from "@mui/material";
import ReviewsNav from "./ReviewsNav";
import { SectionTitle } from "components/Layouts";

const ReviewsHeader: React.FC = () => {
  return (
    <Box
      zIndex={9}
      top={{ xs: 0, md: "15px" }}
      height={{ xs: "auto", md: "145px" }}
      position={{ xs: "unset", md: "sticky" }}
    >
      <SectionTitle title="Reviews List" />

      <Box pb="15px" bgcolor={{ xs: "transparent", md: "app_bg.dark" }}>
        <ReviewsNav />
      </Box>
    </Box>
  );
};

export default ReviewsHeader;
