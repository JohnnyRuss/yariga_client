import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { PATHS } from "config/paths";
import { useIO } from "providers/IOProvider";
import { useLogoutQuery } from "hooks/api/auth";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { Avatar } from "components/Layouts";
import { Button, Menu, MenuList, MenuItem } from "@mui/material";

const UserToolbar: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const { onLogout } = useLogoutQuery();

  const { socket, io_keys } = useIO();

  const onLogoutUser = () => {
    handleClose();
    onLogout();

    if (socket) socket.emit(io_keys.user_disconnection, { userId: user._id });
  };

  return (
    <div>
      <Button onClick={handleClick} variant="text">
        <Avatar
          src={user?.avatar}
          alt={user?.username || "user"}
          loading="eager"
        />
        <span style={{ marginLeft: "8px" }}>{user?.username}</span>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList sx={{ width: "200px", fontSize: "16px" }}>
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Link
              to={PATHS.user_iprofile_page}
              style={{ width: "100%", padding: "5px 15px" }}
            >
              Profile
            </Link>
          </MenuItem>

          <MenuItem sx={{ padding: 0 }}>
            <Button
              fullWidth
              variant="text"
              sx={{
                justifyContent: "flex-start",
                textTransform: "capitalize",
                fontSize: "inherit",
                padding: "5px 15px",

                "&:hover": {
                  background: "transparent",
                },
              }}
              onClick={onLogoutUser}
            >
              Logout
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserToolbar;
