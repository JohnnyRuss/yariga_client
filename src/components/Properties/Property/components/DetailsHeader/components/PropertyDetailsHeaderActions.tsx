/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { useNavigate } from "react-router-dom";

import {
  selectDeletePropertyStatus,
  selectProperty,
} from "store/selectors/properties.selectors";
import { PATHS } from "config/paths";
import { useAppContext } from "providers/AppProvider";
import { usePropertiesQuery } from "hooks/api/properties";

import { DropdownMenu } from "components/Layouts";
import { Box, MenuItem, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";

const buttonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "&:hover": {
    color: "app_text.light",
  },
};

const PropertyDetailsHeaderActions: React.FC = () => {
  const navigate = useNavigate();

  const property = useAppSelector(selectProperty);
  const { status, message } = useAppSelector(selectDeletePropertyStatus);

  const { activateDialog, setSnackbar } = useAppContext();

  const {
    cleanUpProperty,
    cleanUpRelatedProperties,
    deleteProperty,
    setDeletePropertyStatus,
  } = usePropertiesQuery();

  const onUpdateProperty = (onClose: () => void) => {
    onClose();

    const stateParams: {
      isUpdating: boolean;
      property: CreatePropertyFormT;
    } = {
      isUpdating: true,
      property: {
        area: property.area.toString(),
        title: property.title,
        price: property.price.toString(),
        rooms: property.rooms,
        images: property.images,
        location: property.location,
        features: property.features,
        description: property.description,
        propertyType: property.propertyType,
        propertyStatus: {
          value: property.propertyStatus,
          label: property.propertyStatus === "RENT" ? "For Rent" : "For Sale",
          _id: "",
        },
        bedroomsAmount: property.bedroomsAmount?.toString() || "",
        bathroomsAmount: property.bathroomsAmount?.toString() || "",
      },
    };

    navigate(
      `${PATHS.create_property_page}?process=update&property=${property._id}`,
      {
        state: stateParams,
      }
    );
  };

  const onDeleteProperty = (onClose: () => void) => {
    if (!property._id) return;

    onClose();

    activateDialog({
      title: "Delete Property",
      message: "Are you sure you want to delete this property",
      onConfirm: () => deleteProperty({ propertyId: property._id }),
    });
  };

  useEffect(() => {
    if (status === "IDLE" || status === "PENDING") return;

    const isSuccessful = status === "SUCCESS" ? true : false;

    setSnackbar({
      open: true,
      severity: isSuccessful ? "success" : "error",
      message: isSuccessful ? "Property is deleted successfully" : message,
    });

    navigate(PATHS.properties_page);

    setDeletePropertyStatus({ stage: "default" });

    cleanUpProperty();
    cleanUpRelatedProperties();
  }, [status]);

  return (
    <Box>
      <DropdownMenu
        render={({ onClose }) => [
          <MenuItem key={nanoid()}>
            <Button
              variant="text"
              fullWidth
              sx={buttonStyles}
              onClick={() => onUpdateProperty(onClose)}
            >
              Edit
              <Edit />
            </Button>
          </MenuItem>,

          <MenuItem key={nanoid()}>
            <Button
              variant="text"
              fullWidth
              sx={buttonStyles}
              onClick={() => onDeleteProperty(onClose)}
            >
              Delete
              <Delete />
            </Button>
          </MenuItem>,
        ]}
      />
    </Box>
  );
};

export default PropertyDetailsHeaderActions;
