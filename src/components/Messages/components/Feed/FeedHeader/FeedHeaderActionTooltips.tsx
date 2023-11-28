import { Phone, VideoCall } from "@mui/icons-material";
import { Tooltip, Typography, IconButton } from "@mui/material";

const FeedHeaderActionTooltips: React.FC = () => {
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
        <IconButton sx={{ width: "40px", height: "40px" }}>
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
        <IconButton sx={{ width: "40px", height: "40px" }}>
          <VideoCall />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default FeedHeaderActionTooltips;
