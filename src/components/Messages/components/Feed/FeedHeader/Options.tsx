import { nanoid } from "@reduxjs/toolkit";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { useChatQuery } from "hooks/api/messages";

import {
  List,
  Delete,
  CloseOutlined,
  MarkAsUnreadOutlined,
} from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { DropdownMenu } from "components/Layouts";

const Options: React.FC = () => {
  const navigate = useNavigate();

  const { conversationId } = useParams();
  const { pathname, search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const showControl = searchParams.get("active-tab") === "control";

  const onShowControl = (onClose: () => void) => {
    showControl
      ? searchParams.delete("active-tab")
      : searchParams.set("active-tab", "control");

    onClose();

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const { deleteConversation } = useChatQuery();

  const onDeleteConversation = (onClose: () => void) => {
    if (!conversationId) return;

    onClose();
    deleteConversation({ conversationId });
  };

  return (
    <>
      <DropdownMenu
        render={({ onClose }) => [
          <MenuItem
            key={nanoid()}
            onClick={() => onDeleteConversation(onClose)}
          >
            Delete Conversation
            <Delete />
          </MenuItem>,

          <MenuItem onClick={() => onShowControl(onClose)} key={nanoid()}>
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
          </MenuItem>,

          <MenuItem onClick={() => {}} key={nanoid()}>
            Mark as Unread
            <MarkAsUnreadOutlined />
          </MenuItem>,
        ]}
      />
    </>
  );
};

export default Options;
