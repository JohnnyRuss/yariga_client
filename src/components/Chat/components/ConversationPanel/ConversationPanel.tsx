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
import { Avatar } from "components/Chat/components/common";
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
    <Stack
      flex={1}
      gap={1}
      component="aside"
      flexBasis="250px"
      borderLeft="1px solid"
      borderColor="app_text.contrastText"
      height="100%"
    >
      {conversationStatus.loading ? (
        <UI.PanelHeadSkeleton />
      ) : (
        <Box height="215px" overflow="hidden" position="relative">
          <Stack width="100%" alignItems="center" p={1} pt={2} gap={1}>
            <Avatar
              src={adressat?.avatar || ""}
              alt={adressat?.username || ""}
              width="70px"
            />

            <Link to={""}>
              <Typography
                fontWeight={600}
                fontSize={20}
                textTransform="capitalize"
              >
                {adressat?.username}
              </Typography>
            </Link>

            <Typography fontSize={14} color="app_text.main">
              {adressat?.email}
            </Typography>
          </Stack>

          <Box sx={{ width: "100%" }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={onTabChange}
              sx={{
                color: "app_blue.light",
                borderBottom: "1px solid",
                borderColor: "app_text.contrastText",
              }}
            >
              <Tab value="one" label="Media Files" />
              <Tab value="two" label="URL's" />
            </Tabs>
          </Box>

          <Button
            onClick={() => removeParam("conversation-panel")}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <Close sx={{ fontSize: 26 }} />
          </Button>
        </Box>
      )}

      <Box
        width="100%"
        pr={1}
        pb={1}
        overflow="hidden"
        sx={{ height: "calc(100% - 212px)" }}
      >
        {value === "one" && (
          <UI.ImagesList conversationIsLoading={conversationStatus.loading} />
        )}

        {value === "two" && (
          <UI.URLList conversationIsLoading={conversationStatus.loading} />
        )}
      </Box>
    </Stack>
  );
};

export default ConversationPanel;
