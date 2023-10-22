import React from "react";

import { useAppSelector } from "store/hooks";
import { selectPropertyFilter } from "store/selectors/properties.selectors";
import { usePropertyFilterContext } from "providers/PropertyFilterProvider";

import MoreFilterBody from "./MoreFilterBody";
import MoreFilterButton from "./MoreFilterButton";
import * as Form from "components/Layouts/Form";
import { Search } from "@mui/icons-material";
import { Stack, TextField, InputAdornment, MenuItem } from "@mui/material";

const menuItemStyles = { "&:hover": { background: "transparent" } };

const Filter: React.FC = () => {
  const filter = useAppSelector(selectPropertyFilter);

  const { onSelectSearchParams, onMultipleSelectSearchParams, searchParams } =
    usePropertyFilterContext();

  return (
    <Stack direction="row" flexWrap="wrap" gap={3} mb={2} mt={4}>
      <TextField
        placeholder="Enter an address, city or title"
        sx={{ flex: 1, flexBasis: "140px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Form.FormSelectField
        label="Sort By"
        passEvent={true}
        list={filter.sort}
        fieldProps={{
          name: "sort",
          onChange: onSelectSearchParams,
          value: searchParams.sort,
        }}
      />

      <Form.FormSelectField
        label="Status"
        passEvent={true}
        list={filter.statuses}
        fieldProps={{
          name: "statuses",
          onChange: onSelectSearchParams,
          value: searchParams.statuses,
        }}
      />

      <Form.FormSelectField
        label="Type"
        passEvent={true}
        list={filter.propertyTypes}
        fieldProps={{
          name: "propertyTypes",
          onChange: onSelectSearchParams,
          value: searchParams.propertyTypes,
        }}
      />

      <Form.FormSelectField
        label="Country"
        passEvent={true}
        list={filter.countries}
        fieldProps={{
          name: "countries",
          onChange: onSelectSearchParams,
          value: searchParams.countries,
        }}
      />

      <div>
        <MoreFilterButton />

        <MoreFilterBody>
          <MenuItem sx={menuItemStyles}>
            <Form.FormSelectField
              label="State"
              passEvent={true}
              list={filter.states}
              fieldProps={{
                name: "states",
                onChange: onSelectSearchParams,
                value: searchParams.states,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <Form.FormMultipleSelectField
              label="Room Types"
              passEvent={true}
              list={filter.roomTypes}
              fieldProps={{
                name: "roomTypes",
                onChange: onMultipleSelectSearchParams,
                value: searchParams.roomTypes,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <Form.FormMultipleSelectField
              label="Features"
              passEvent={true}
              list={filter.propertyFeatures}
              fieldProps={{
                name: "propertyFeatures",
                onChange: onMultipleSelectSearchParams,
                value: searchParams.propertyFeatures,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <TextField placeholder="Min Price" fullWidth />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <TextField placeholder="Max Price" fullWidth />
          </MenuItem>
        </MoreFilterBody>
      </div>
    </Stack>
  );
};

export default Filter;
