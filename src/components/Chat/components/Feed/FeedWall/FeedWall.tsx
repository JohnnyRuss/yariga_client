import { useAppSelector } from "store/hooks";
import { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { getTimeString } from "utils";
import { MAX_MESSAGE_PER_PAGE } from "config/config";
import { useChatContext } from "providers/chat/ChatProvider";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Spinner } from "components/Layouts";
import { FeedWallContainer } from "./styles/FeedWall.styled";
import { Stack, Box, Divider } from "@mui/material";

import { ConversationParticipantT } from "interface/db/chat.types";

type FeedWallT = {
  isRead: boolean;
  loading: boolean;
  adressat: ConversationParticipantT;
};

const FeedWall: React.FC<FeedWallT> = ({ isRead, loading, adressat }) => {
  const { authenticatedUserId } = useChatContext();
  const messages = useAppSelector(selectConversationMessages);

  const onNextPage = () => {
    console.log("lets load more");
  };

  return (
    <FeedWallContainer>
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
              className="custom_scrollbar"
              dataLength={MAX_MESSAGE_PER_PAGE * 1}
              loader={<Spinner absolute={false} />}
              style={{
                width: "100%",
                display: "flex",
                paddingRight: "8px",
                flexDirection: "column-reverse",
              }}
            >
              {[...messages].map((group) =>
                group.divider ? (
                  <Divider key={group.groupId} className="divider">
                    {getTimeString(group.date)}
                  </Divider>
                ) : (
                  <UI.MessageGroup
                    key={group.groupId}
                    messageGroup={group}
                    authenticatedUserId={authenticatedUserId}
                  />
                )
              )}
            </InfiniteScroll>

            {isRead && (
              <UI.SeenBadge
                avatar={adressat.avatar}
                username={adressat.username}
              />
            )}
          </Stack>
        )}
      </Box>
    </FeedWallContainer>
  );
};

export default memo(FeedWall);
