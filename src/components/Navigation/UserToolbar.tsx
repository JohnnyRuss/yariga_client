import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { useLogoutQuery } from "hooks/api/auth";
import { selectUser } from "store/selectors/auth.selectors";

import { Button, Menu, MenuList, MenuItem, Avatar } from "@mui/material";

const UserToolbar: React.FC = () => {
  const user = useAppSelector(selectUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const { onLogout } = useLogoutQuery();

  return (
    <div>
      <Button onClick={handleClick} variant="text">
        <Avatar src={user?.avatar} alt={user?.username}>
          {user?.username[0]?.toUpperCase()}
        </Avatar>
        <span style={{ marginLeft: "8px" }}>{user?.username}</span>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList sx={{ width: "200px", fontSize: "16px" }}>
          <MenuItem onClick={handleClose}>
            <Link to={`/user/${user?._id}`}>Profile</Link>
          </MenuItem>

          <MenuItem>
            <Button
              fullWidth
              variant="text"
              sx={{
                justifyContent: "flex-start",
                textTransform: "capitalize",
                fontSize: "inherit",
                padding: 0,

                "&:hover": {
                  background: "transparent",
                },
              }}
              onClick={() => {
                handleClose();
                onLogout();
              }}
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
