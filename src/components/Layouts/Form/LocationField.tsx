import React, { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import getOpenStreetMapLocation from "services/nominatimOpenStreetMap";

import LocationAutocompleteRenderInput from "./components/LocationAutocompleteRenderInput";
import LocationAutocompleteDropdown from "./components/LocationAutocompleteDropdown";
import { Autocomplete } from "@mui/material";
import styles from "./form.module.css";

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

  const onSelectLocation = (location: OpenStreetMapLocationT) =>
    fieldProps.onChange(location);

  const onChangeLocation = (_: any, option: OpenStreetMapLocationT | null) =>
    option && onSelectLocation(option);

  const getOptionLabel = (option: OpenStreetMapLocationT) =>
    `${option.name} - ${option.display_name}`;

  useEffect(() => {
    if (!locationSearch) return;

    const timeOutId = setTimeout(async () => {
      const result = await getOpenStreetMapLocation(locationSearch);
      setOptionsList(() => result);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [locationSearch]);

  return (
    <Autocomplete
      fullWidth
      blurOnSelect={true}
      options={optionsList}
      className={styles.locationField}
      onChange={onChangeLocation}
      getOptionLabel={getOptionLabel}
      filterOptions={(options) => options}
      renderInput={(params) => (
        <LocationAutocompleteRenderInput
          params={params}
          fieldProps={fieldProps}
          fieldStateProps={fieldStateProps}
          locationSearch={locationSearch}
          setLocationSearch={setLocationSearch}
        />
      )}
      renderOption={(props, option) => (
        <LocationAutocompleteDropdown
          key={nanoid()}
          props={props}
          option={option}
        />
      )}
    />
  );
};

export default LocationField;
