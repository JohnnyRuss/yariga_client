import React from "react";

import { Box, Stack, Chip, Typography } from "@mui/material";
import styles from "../form.module.css";

interface LocationAutocompleteDropdownT {
  option: {
    name: string;
    addresstype: string;
    display_name: string;
  };
  props: React.HTMLAttributes<HTMLLIElement>;
}

const LocationAutocompleteDropdown: React.FC<LocationAutocompleteDropdownT> = ({
  option,
  props,
}) => {
  return (
    <Box
      component="li"
      {...props}
      borderBottom="1px solid"
      borderColor="app_text.main"
      className={styles.locationFieldItem}
    >
      <Stack direction="column">
        <Stack direction="row" alignItems="center" mb="5px">
          <span style={{ fontWeight: 600 }}>{option.name}</span>

          <Chip
            label={option.addresstype}
            variant="filled"
            color="primary"
            size="small"
            sx={{ marginLeft: "16px" }}
          />
        </Stack>

        <Typography color="app_text.main" fontSize="14px">
          {option.display_name}
        </Typography>
      </Stack>
    </Box>
  );
};

export default LocationAutocompleteDropdown;
