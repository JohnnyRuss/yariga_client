import { memo } from "react";
import { useAppSelector } from "store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  selectConversationOrigin,
  selectConversationPagination,
  selectConversationMessagesStatus,
} from "store/selectors/chat.selectors";
import { MAX_MESSAGE_PER_PAGE } from "config/config";
import { useConversationQuery } from "hooks/api/chat";
import { useChatContext } from "providers/chat/ChatProvider";

import * as UI from "./";
import * as MuiStyled from "./Feed.styled";
import { Spinner } from "components/Layouts";
import MessageList from "./Message/MessageList";
import { Stack, Box } from "@mui/material";

type FeedWallT = {
  loading: boolean;
};

const FeedWall: React.FC<FeedWallT> = ({ loading }) => {
  const status = useAppSelector(selectConversationMessagesStatus);
  const { currentPage, hasMore } = useAppSelector(selectConversationPagination);

  const {
    isRead,
    lastMessage,
    participants,
    _id: conversationId,
  } = useAppSelector(selectConversationOrigin);

  const { getLastMessageAdressat } = useChatContext();
  const adressat = getLastMessageAdressat(
    participants,
    lastMessage?.sender?._id || ""
  );

  const { getConversationMessages } = useConversationQuery();

  const onNextPage = () => {
    if (!conversationId || !currentPage) return;

    getConversationMessages({
      page: currentPage + 1,
      conversationId: conversationId,
    });
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
