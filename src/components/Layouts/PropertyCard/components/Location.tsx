import { Place } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { LineClamp } from "components/Layouts";

interface LocationT {
  location: string;
}

const Location: React.FC<LocationT> = ({ location }) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="flex-start">
      <Place sx={{ fontSize: 18, color: "app_text.dark" }} />

      <LineClamp
        clamp={1}
        title={location}
        sx={{
          fontSize: 14,
          color: "app_text.main",
          textTransform: "capitalize",
        }}
      >
        {location}
      </LineClamp>
    </Stack>
  );
};

export default Location;
