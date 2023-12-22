import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";

import * as UI from "./";
import * as MuiStyled from "./FeedHeader.styled";
import { ArrowBackIos } from "@mui/icons-material";
import { Stack, Button } from "@mui/material";

type FeedHeaderT = {
  loading: boolean;
  isRead: boolean;
};

const FeedHeader: React.FC<FeedHeaderT> = ({ loading, isRead }) => {
  const navigate = useNavigate();

  const onGoBack = () => navigate(PATHS.chat_page);

  return loading ? (
    <UI.FeedHeaderSkeleton />
  ) : (
    <MuiStyled.FeedHeader>
      <Stack className="feed-header__stack">
        <Button
          variant="text"
          onClick={onGoBack}
          className="feed-header__stack-back--btn"
        >
          <ArrowBackIos />
        </Button>

        <UI.FeedHeaderUser />

        <UI.FeedHeaderActions isRead={isRead} />
      </Stack>
    </MuiStyled.FeedHeader>
  );
};

export default memo(FeedHeader);
