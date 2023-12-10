import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";

import * as UI from "./";
import { ArrowBackIos } from "@mui/icons-material";
import { Box, Stack, Button, useTheme } from "@mui/material";

type FeedHeaderT = {
  loading: boolean;
  isRead: boolean;
};

const FeedHeader: React.FC<FeedHeaderT> = ({ loading, isRead }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const onGoBack = () => navigate(PATHS.chat_page);

  return loading ? (
    <UI.FeedHeaderSkeleton />
  ) : (
    <Box p={1} borderBottom="1px solid" borderColor="app_text.contrastText">
      <Stack direction="row" gap={1} height="100%" alignItems="center">
        <Button
          onClick={onGoBack}
          variant="text"
          sx={{
            padding: 0,
            width: "40px",
            height: "40px",
            minWidth: "auto",
            color: "app_text.dark",

            [theme.breakpoints.up("app_desktop")]: {
              display: "none",
            },
          }}
        >
          <ArrowBackIos />
        </Button>

        <UI.FeedHeaderUser />

        <UI.FeedHeaderActions isRead={isRead} />
      </Stack>
    </Box>
  );
};

export default memo(FeedHeader);
