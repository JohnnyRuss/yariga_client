import { Place } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

interface LocationT {
  location: string;
}

const Location: React.FC<LocationT> = ({ location }) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="flex-start">
      <Place sx={{ fontSize: 18, color: "app_text.dark" }} />

      <Typography
        fontSize={14}
        color="app_text.main"
        className="line-clamp-1"
        title={location}
        textTransform="capitalize"
      >
        {location}
      </Typography>
    </Stack>
  );
};

export default Location;
