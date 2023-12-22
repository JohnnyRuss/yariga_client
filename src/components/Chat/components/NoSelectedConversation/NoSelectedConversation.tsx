import * as MuiStyled from "./NoSelectedConversation.styled";
import { Box, Typography } from "@mui/material";
import { RealTimeCollaboration } from "assets/icons";

const NoSelectedConversation: React.FC = () => {
  return (
    <MuiStyled.NoSelectedConversation>
      <Box component="figure" className="chat__fig">
        <img
          width="100%"
          height="100%"
          loading="eager"
          title="conversations"
          src={RealTimeCollaboration}
          alt="real-time-collaboration"
        />
      </Box>

      <Typography className="chat__no-conversation">
        There are no selected conversation
      </Typography>
    </MuiStyled.NoSelectedConversation>
  );
};

export default NoSelectedConversation;
