import { nanoid } from "@reduxjs/toolkit";

import { useAppContext } from "providers/AppProvider";

import { DropdownMenu } from "components/Layouts";
import { MenuItem } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

interface PropertyDetailsHeaderActionsT {}

const PropertyDetailsHeaderActions: React.FC<PropertyDetailsHeaderActionsT> = (
  props
) => {
  const { activateDialog } = useAppContext();

  const onDeleteProperty = (onClose: () => void) => {
    onClose();
    activateDialog({
      title: "Delete Property",
      message: "Are you sure you want to delete this property",
      onConfirm: () => {},
    });
  };

  return (
    <div>
      <DropdownMenu
        render={({ onClose }) => [
          <MenuItem key={nanoid()} onClick={() => {}}>
            Edit
            <Edit />
          </MenuItem>,
          <MenuItem key={nanoid()} onClick={() => onDeleteProperty(onClose)}>
            Delete
            <Delete />
          </MenuItem>,
        ]}
      />
    </div>
  );
};

export default PropertyDetailsHeaderActions;
