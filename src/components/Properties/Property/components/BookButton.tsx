import { Box, Skeleton } from "@mui/material";
import { Button } from "components/Layouts";

interface BookButtonT {
  loading: boolean;
}

const BookButton: React.FC<BookButtonT> = ({ loading }) => {
  return loading ? (
    <Skeleton
      variant="rectangular"
      width="100%"
      height="40px"
      sx={{ borderRadius: "5px" }}
    />
  ) : (
    <Box>
      <Button title="Book Now" fullWidth={true} />
    </Box>
  );
};

export default BookButton;
