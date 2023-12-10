import { Phone, VideoCall } from "@mui/icons-material";
import { Tooltip, Typography, IconButton, useTheme } from "@mui/material";

const FeedHeaderActionTooltips: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Tooltip
        title={
          <>
            <Typography sx={{ textAlign: "center", wordWrap: "balance" }}>
              Call functionality will be added soon 🙏
            </Typography>
          </>
        }
      >
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            display: "none",
            [theme.breakpoints.up("app_mobile")]: {
              display: "flex",
            },
          }}
        >
          <Phone />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={
          <>
            <Typography sx={{ textAlign: "center", wordWrap: "balance" }}>
              VideoCall functionality will be added soon 🙏
            </Typography>
          </>
        }
      >
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            display: "none",
            [theme.breakpoints.up("app_mobile")]: {
              display: "flex",
            },
          }}
        >
          <VideoCall />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default FeedHeaderActionTooltips;
