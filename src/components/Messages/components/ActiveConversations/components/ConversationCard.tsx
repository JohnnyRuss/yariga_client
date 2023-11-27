import { NavLink } from "react-router-dom";
import { dynamic_paths } from "config/paths";

import { Stack, Typography, Box } from "@mui/material";
import Avatar from "../../common/Avatar";

type ConversationCardT = {
  card: {
    _id: number;
    adressat: string;
    createdAt: Date;
    lastMessage: string;
    avatar: string;
  };
};

const ConversationCard: React.FC<ConversationCardT> = ({ card }) => {
  return (
    <Box
      component={NavLink}
      to={dynamic_paths.messages_conversation__page(card._id.toString())}
      sx={{
        padding: "8px 7px",
        borderRadius: "10px",

        "&.active": {
          backgroundColor: "app_blue.light",
          color: "app_text.light",
        },

        "&.active .MuiBox-root.conversation-date p": {
          color: "app_text.light",
        },

        "&.active .MuiTypography-root.conversation-text": {
          color: "app_text.light",
        },
      }}
      className={({ isActive }) => (isActive ? "active-conversation" : "")}
    >
      <Stack direction="row" gap={1}>
        <Avatar src={card.avatar} alt={card.adressat} />

        <Stack mt="4px">
          <Typography fontWeight={600}>{card.adressat}</Typography>

          <Typography
            fontSize={14}
            color="app_text.main"
            className="conversation-text"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {card.lastMessage}
          </Typography>
        </Stack>

        <Box ml="auto" mt="4px" className="conversation-date" minWidth="64px">
          <Typography fontSize={14} color="app_text.main" width="100%">
            {new Intl.DateTimeFormat("en-us", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(card.createdAt)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConversationCard;
