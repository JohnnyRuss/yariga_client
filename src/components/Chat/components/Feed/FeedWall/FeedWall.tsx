import { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { MAX_MESSAGE_PER_PAGE } from "config/config";

import * as UI from "./";
import * as MuiStyled from "./Feed.styled";
import { Spinner } from "components/Layouts";
import MessageList from "./Message/MessageList";
import { Stack, Box } from "@mui/material";

import { ConversationParticipantT } from "interface/db/chat.types";

type FeedWallT = {
  isRead: boolean;
  loading: boolean;
  adressat: ConversationParticipantT;
};

const FeedWall: React.FC<FeedWallT> = ({ isRead, loading, adressat }) => {
  const onNextPage = () => {
    console.log("lets load more");
  };

  return (
    <MuiStyled.FeedWall>
      <Box className="custom_scrollbar feed-wall__wrapper">
        <UI.FeedWallStarter loading={loading} />

        {loading ? (
          <UI.MessageGroupSkeleton />
        ) : (
          <Stack className="feed-wall__scrollbar-wrapper">
            <InfiniteScroll
              height="62vh"
              hasMore={true}
              inverse={true}
              next={onNextPage}
              scrollThreshold={0.7}
              dataLength={MAX_MESSAGE_PER_PAGE * 1}
              loader={<Spinner absolute={false} />}
              className="custom_scrollbar infinite-scroll__def"
            >
              {<MessageList />}

              {isRead && (
                <UI.SeenBadge
                  avatar={adressat.avatar}
                  username={adressat.username}
                />
              )}
            </InfiniteScroll>
          </Stack>
        )}
      </Box>
    </MuiStyled.FeedWall>
  );
};

export default memo(FeedWall);
