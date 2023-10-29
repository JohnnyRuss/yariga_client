import { useState } from "react";

import { MoreHoriz } from "@mui/icons-material";
import { Box, Button, Menu } from "@mui/material";

interface DropdownMenuT {
  render: ({ onClose }: { onClose: () => void }) => Array<React.ReactNode>;
}

const DropdownMenu: React.FC<DropdownMenuT> = ({ render }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        variant="text"
        onClick={handleClick}
        sx={{ color: "app_text.dark", padding: 0 }}
      >
        <MoreHoriz sx={{ fontSize: "35px" }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            minWidth: "250px",
            padding: "5px",

            li: {
              gap: "10px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "5px",

              "&:hover": {
                color: "app_text.light",
                backgroundColor: "app_blue.light",
              },

              svg: {
                fontSize: "20px",
              },
            },
          },
        }}
      >
        {render({ onClose: handleClose })}
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
