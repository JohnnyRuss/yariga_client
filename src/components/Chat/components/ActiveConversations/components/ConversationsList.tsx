import { useAppSelector } from "store/hooks";
import { selectConversations } from "store/selectors/chat.selectors";

import { useChatQuery } from "hooks/api/chat";
import { MAX_CONVERSATION_PER_PAGE } from "config/config";
import { selectAllConversationsPagination } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Box } from "@mui/material";
import { Spinner } from "components/Layouts";
import InfiniteScroll from "react-infinite-scroll-component";

import { ConversationShortInfoT } from "interface/store/chat.types";

type ConversationsListT = {
  loading: boolean;
};

const ConversationsList: React.FC<ConversationsListT> = ({ loading }) => {
  const conversations = useAppSelector(selectConversations);

  const sortFn = (a: ConversationShortInfoT, b: ConversationShortInfoT) => {
    if (!a.lastMessage && !b.lastMessage) return 0;
    else if (!a.lastMessage) return -1;
    else if (!b.lastMessage) return 1;
    else
      return (
        new Date(b.lastMessage.createdAt).getTime() -
        new Date(a.lastMessage.createdAt).getTime()
      );
  };

  const { currentPage, hasMore } = useAppSelector(
    selectAllConversationsPagination
  );

  const { getPaginatedConversations } = useChatQuery();

  const onNextPage = () => {
    getPaginatedConversations({ page: currentPage + 1 });
  };

  return (
    <Box mt="15px">
      {loading ? (
        <UI.ConversationCardSkeleton />
      ) : (
        <InfiniteScroll
          height="73vh"
          next={onNextPage}
          hasMore={hasMore}
          scrollThreshold={0.7}
          loader={<Spinner absolute={false} />}
          dataLength={MAX_CONVERSATION_PER_PAGE * currentPage}
          className="no-scrollbar smooth-scroll"
          style={{ paddingRight: "8px" }}
        >
          {[...conversations].sort(sortFn).map((conversation) => (
            <UI.ConversationCard
              key={`conversation-card__${conversation._id}`}
              conversation={conversation}
            />
          ))}
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default ConversationsList;
