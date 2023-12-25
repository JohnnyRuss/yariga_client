import { useState } from "react";
import { useAppSelector } from "store/hooks";
import { Link } from "react-router-dom";

import {
  selectConversationAdressat,
  selectConversationStatus,
} from "store/selectors/chat.selectors";
import { useSearchParams } from "hooks/utils";

import * as UI from "./components";
import { Close } from "@mui/icons-material";
import * as MuiStyled from "./ConversationPanel.styled";
import { UserRoleChip, Avatar } from "components/Layouts";
import { Stack, Typography, Tabs, Tab, Box, Button } from "@mui/material";

type ConversationPanelT = {};

const ConversationPanel: React.FC<ConversationPanelT> = () => {
  const [value, setValue] = useState("one");

  const adressat = useAppSelector(selectConversationAdressat);

  const { removeParam } = useSearchParams();

  const onTabChange = (event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);

  const conversationStatus = useAppSelector(selectConversationStatus);

  return (
    <MuiStyled.ConversationPanel>
      {conversationStatus.loading ? (
        <UI.PanelHeadSkeleton />
      ) : (
        <Box className="conversation-panel__header">
          <Stack className="conversation-panel__header-user">
            <Avatar
              width="70px"
              src={adressat?.avatar || ""}
              alt={adressat?.username || ""}
              showBadge={adressat?.isOnline}
            />

            <Link to={""}>
              <Typography className="conversation-panel__header-user--username">
                {adressat?.username || "Unknown User"}
              </Typography>
            </Link>

            {adressat?.email && (
              <Typography className="conversation-panel__header-user--email">
                {adressat.email}
              </Typography>
            )}

            {adressat?.role && <UserRoleChip role={adressat.role} />}
          </Stack>

          <Box className="conversation-panel__header-tabs--container">
            <Tabs
              value={value}
              variant="fullWidth"
              onChange={onTabChange}
              className="conversation-panel__header-tabs"
            >
              <Tab value="one" label="Media Files" />

              <Tab value="two" label="URL's" />
            </Tabs>
          </Box>

          <Button
            className="conversation-panel__close-btn"
            onClick={() => removeParam("conversation-panel")}
          >
            <Close className="conversation-panel__close-btn--icon" />
          </Button>
        </Box>
      )}

      <Box className="conversation-panel__content">
        {value === "one" && (
          <UI.ImagesList conversationIsLoading={conversationStatus.loading} />
        )}

        {value === "two" && (
          <UI.URLList conversationIsLoading={conversationStatus.loading} />
        )}
      </Box>
    </MuiStyled.ConversationPanel>
  );
};

export default ConversationPanel;
