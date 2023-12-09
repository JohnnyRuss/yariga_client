import { nanoid } from "@reduxjs/toolkit";

import { useChatQuery } from "hooks/api/chat";
import { useSearchParams } from "hooks/utils";

import {
  List,
  Delete,
  CloseOutlined,
  MarkAsUnreadOutlined,
} from "@mui/icons-material";
import { DropdownMenu } from "components/Layouts";
import { MenuItem } from "@mui/material";

type ConversationOptionsT = {
  showPanelBtn?: boolean;
  conversationId: string;
  isRead: boolean;
};

const ConversationOptions: React.FC<ConversationOptionsT> = ({
  isRead,
  conversationId,
  showPanelBtn = true,
}) => {
  const { appendParam, getParamValue, removeParam } = useSearchParams();

  const showControl = getParamValue("conversation-panel") === "1";

  const onShowControl = (onClose: () => void) => {
    showControl
      ? removeParam("conversation-panel")
      : appendParam("conversation-panel", "1");

    onClose();
  };

  const { deleteConversation, markConversationAsRead } = useChatQuery();

  const onDeleteConversation = (onClose: () => void) => {
    if (!conversationId) return;

    onClose();
    deleteConversation({ conversationId });
  };

  const onMarkAsRed = (value: "1" | "0", onClose: () => void) => {
    if (!conversationId) return;

    onClose();
    markConversationAsRead({ conversationId, read: value });
  };

  return (
    <>
      <DropdownMenu
        triggerColor="inherit"
        render={({ onClose }) => [
          <div key={nanoid()}>
            {showPanelBtn ? (
              <MenuItem onClick={() => onShowControl(onClose)}>
                {showControl ? (
                  <>
                    Close Panel
                    <CloseOutlined sx={{ fontSize: "32px" }} />
                  </>
                ) : (
                  <>
                    Open Panel
                    <List sx={{ fontSize: "32px" }} />
                  </>
                )}
              </MenuItem>
            ) : (
              <div />
            )}
          </div>,

          isRead ? (
            <MenuItem
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                onMarkAsRed(e.currentTarget.dataset.value as "0", onClose)
              }
              key={nanoid()}
              data-value="0"
            >
              Mark as Unread
              <MarkAsUnreadOutlined />
            </MenuItem>
          ) : (
            <MenuItem
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                onMarkAsRed(e.currentTarget.dataset.value as "1", onClose)
              }
              key={nanoid()}
              data-value="1"
            >
              Mark as Read
              <MarkAsUnreadOutlined />
            </MenuItem>
          ),

          <MenuItem
            key={nanoid()}
            onClick={() => onDeleteConversation(onClose)}
          >
            Delete Conversation
            <Delete />
          </MenuItem>,
        ]}
      />
    </>
  );
};

export default ConversationOptions;
