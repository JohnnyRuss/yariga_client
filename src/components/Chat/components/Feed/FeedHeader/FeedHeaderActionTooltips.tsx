import { Tooltip } from "@mui/material";
import * as MuiStyled from "./FeedHeader.styled";
import { Phone, VideoCall } from "@mui/icons-material";

const FeedHeaderActionTooltips: React.FC = () => {
  return (
    <>
      <Tooltip
        title={
          <MuiStyled.FeedHeaderActionTooltipTitle className="feed-header__tooltip">
            Call functionality will be added soon 🙏
          </MuiStyled.FeedHeaderActionTooltipTitle>
        }
      >
        <MuiStyled.FeedHeaderActionTooltipButton>
          <Phone />
        </MuiStyled.FeedHeaderActionTooltipButton>
      </Tooltip>

      <Tooltip
        title={
          <MuiStyled.FeedHeaderActionTooltipTitle>
            VideoCall functionality will be added soon 🙏
          </MuiStyled.FeedHeaderActionTooltipTitle>
        }
      >
        <MuiStyled.FeedHeaderActionTooltipButton>
          <VideoCall />
        </MuiStyled.FeedHeaderActionTooltipButton>
      </Tooltip>
    </>
  );
};

export default FeedHeaderActionTooltips;
