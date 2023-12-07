import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { selectConversationAdressat } from "store/selectors/chat.selectors";

import * as UI from "./components";
import { Avatar } from "components/Chat/components/common";
import { Stack, Typography, Tabs, Tab, Box } from "@mui/material";

type ConversationPanelT = {};

const ConversationPanel: React.FC<ConversationPanelT> = () => {
  const adressat = useAppSelector(selectConversationAdressat);
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
      <Box height="215px" overflow="hidden">
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
            onChange={handleChange}
            sx={{
              color: "app_blue.light",
              borderBottom: "1px solid",
              borderColor: "app_text.contrastText",
            }}
          >
            <Tab value="one" label="URL's" />
            <Tab value="two" label="Media Files" />
          </Tabs>
        </Box>
      </Box>

      <Box
        width="100%"
        pr={1}
        pb={1}
        overflow="hidden"
        sx={{ height: "calc(100% - 212px)" }}
      >
        {value === "one" && <UI.URLList />}
        {value === "two" && <UI.ImagesList />}
      </Box>
    </Stack>
  );
};

export default ConversationPanel;
