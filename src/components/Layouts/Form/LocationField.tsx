import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import getOpenStreetMapLocation from "services/nominatimOpenStreetMap";

// Components & Styles
import styles from "./form.module.css";
import { Autocomplete } from "@mui/material";
import LocationAutocompleteDropdown from "./components/LocationAutocompleteDropdown";
import LocationAutocompleteRenderInput from "./components/LocationAutocompleteRenderInput";

// TYPES
import {
  ReactHookFormLocationFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form.types";
import { AutocompleteRenderInputParams } from "@mui/material";
import { OpenStreetMapLocationT } from "interface/config/config.types";

interface LocationFieldT {
  showIcon?: boolean;
  fieldProps: ReactHookFormLocationFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
}

const LocationField: React.FC<LocationFieldT> = ({
  fieldProps,
  fieldStateProps,
  showIcon = false,
}) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [optionsList, setOptionsList] = useState<OpenStreetMapLocationT[]>([]);

  const onSelectLocation = (location: OpenStreetMapLocationT) =>
    fieldProps.onChange(location);

  const onChangeLocation = (_: any, option: OpenStreetMapLocationT | null) =>
    option && onSelectLocation(option);

  const getOptionLabel = (option: OpenStreetMapLocationT) =>
    Object.values(option)[0] ? `${option.name} - ${option.displayName}` : "";

  const filterOptions = (options: OpenStreetMapLocationT[]) => options;

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <LocationAutocompleteRenderInput
      params={params}
      showIcon={showIcon}
      fieldProps={fieldProps}
      locationSearch={locationSearch}
      fieldStateProps={fieldStateProps}
      setLocationSearch={setLocationSearch}
    />
  );

  const renderOptions = (
    props: React.HTMLAttributes<HTMLElement>,
    option: OpenStreetMapLocationT
  ) => (
    <LocationAutocompleteDropdown
      key={nanoid()}
      props={props}
      option={option}
    />
  );

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
      disablePortal
      value={fieldProps.value}
      blurOnSelect={true}
      options={optionsList}
      renderInput={renderInput}
      className={styles.locationField}
      onChange={onChangeLocation}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      renderOption={renderOptions}
    />
  );
};

export default LocationField;
