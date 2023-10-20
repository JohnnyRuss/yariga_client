import React, { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import getOpenStreetMapLocation from "services/nominatimOpenStreetMap";

import styles from "./form.module.css";
import FormHelperText from "./FormHelperText";
import FormTextField from "./FormTextField";
import { Autocomplete, Box, Stack, Chip, Typography } from "@mui/material";

import {
  ReactHookFormLocationFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";
import { OpenStreetMapLocationT } from "interface/config/config.types";

interface LocationFieldT {
  fieldProps: ReactHookFormLocationFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
}

const LocationField: React.FC<LocationFieldT> = ({
  fieldProps,
  fieldStateProps,
}) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [optionsList, setOptionsList] = useState<OpenStreetMapLocationT[]>([]);

  function onSelectLocation(location: OpenStreetMapLocationT) {
    fieldProps.onChange(location);
  }

  useEffect(() => {
    if (!locationSearch) return;

    const timeOutId = setTimeout(async () => {
      const result = await getOpenStreetMapLocation(locationSearch);
      setOptionsList(result.length > 0 ? result : []);
    }, 600);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [locationSearch]);

  return (
    <Autocomplete
      fullWidth
      disablePortal
      autoHighlight
      autoSelect={true}
      blurOnSelect={true}
      options={optionsList}
      className={styles.locationField}
      onChange={(_, option) =>
        onSelectLocation(option as OpenStreetMapLocationT)
      }
      getOptionLabel={(option) => `${option.name} - ${option.display_name}`}
      renderInput={(params) => (
        <>
          <FormTextField
            autoCompleteParams={params}
            fieldProps={{
              ...fieldProps,
              value: locationSearch,
              onChange: (value) => setLocationSearch(value),
            }}
            fieldStateProps={fieldStateProps}
            label="Location"
          />

          {fieldStateProps.error && (
            <FormHelperText text="Please provide us property location" />
          )}
        </>
      )}
      renderOption={(props, option) => (
        <Box
          key={nanoid()}
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
      )}
    />
  );
};

export default LocationField;
