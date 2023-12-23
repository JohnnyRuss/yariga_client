import { memo } from "react";
import { useAppSelector } from "store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  selectConversationMessagesStatus,
  selectConversationPagination,
} from "store/selectors/chat.selectors";
import { useConversationQuery } from "hooks/api/chat";
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
  conversationId: string;
  adressat: ConversationParticipantT;
};

const FeedWall: React.FC<FeedWallT> = ({
  isRead,
  loading,
  adressat,
  conversationId,
}) => {
  const status = useAppSelector(selectConversationMessagesStatus);
  const { currentPage, hasMore } = useAppSelector(selectConversationPagination);

  const { getConversationMessages } = useConversationQuery();

  const onNextPage = () => {
    if (!conversationId || !currentPage) return;
    getConversationMessages({ conversationId, page: currentPage + 1 });
  };

  return (
    <MuiStyled.FeedWall>
      <Box className="custom_scrollbar feed-wall__wrapper">
        {!status.loading && <UI.FeedWallStarter loading={loading} />}

        {loading ? (
          <UI.MessageGroupSkeleton />
        ) : (
          <Stack className="feed-wall__scrollbar-wrapper">
            <InfiniteScroll
              height="62vh"
              hasMore={hasMore}
              inverse={true}
              next={onNextPage}
              scrollThreshold={0.7}
              dataLength={MAX_MESSAGE_PER_PAGE * currentPage}
              loader={<Spinner absolute={false} />}
              className="custom_scrollbar infinite-scroll__def"
            >
              <MessageList />

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
