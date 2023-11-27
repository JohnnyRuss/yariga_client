import { useNavigate, useLocation } from "react-router-dom";

import { IconButton } from "@mui/material";
import { List, CloseOutlined } from "@mui/icons-material";

const ShowControlButton: React.FC = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const showControl = searchParams.get("active-tab") === "control";

  const onShowControl = () => {
    showControl
      ? searchParams.delete("active-tab")
      : searchParams.set("active-tab", "control");

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <IconButton
      sx={{ position: "absolute", right: 1, top: 2 }}
      onClick={onShowControl}
    >
      {showControl ? (
        <CloseOutlined sx={{ fontSize: "32px" }} />
      ) : (
        <List sx={{ fontSize: "32px" }} />
      )}
    </IconButton>
  );
};

export default ShowControlButton;
