import { usePropertyFilterContext } from "providers/FilterProvider/PropertyFilterProvider";

import { Menu } from "@mui/material";

interface MoreFilterBodyT {
  children: React.ReactNode;
}

const MoreFilterBody: React.FC<MoreFilterBodyT> = ({ children }) => {
  const { moreFilterAnchorEl, moreFilterIsOpen, onCloseMoreFilter } =
    usePropertyFilterContext();

  return (
    <Menu
      open={moreFilterIsOpen}
      anchorEl={moreFilterAnchorEl}
      onClose={onCloseMoreFilter}
      sx={{ marginTop: "10px", minWidth: "350px" }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Menu>
  );
};

export default MoreFilterBody;
