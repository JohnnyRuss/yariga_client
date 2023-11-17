import React from "react";

import { useAppSelector } from "store/hooks";
import { selectPropertyFilter } from "store/selectors/propertiesFilter.selectors";
import { usePropertyFilterContext } from "providers/PropertyFilterProvider";

import FilterSkeleton from "./FilterSkeleton";
import MoreFilterBody from "./MoreFilterBody";
import MoreFilterButton from "./MoreFilterButton";
import { Search } from "@mui/icons-material";
import * as Form from "components/Layouts/Form";
import { Stack, TextField, InputAdornment, MenuItem } from "@mui/material";

const menuItemStyles = { "&:hover": { background: "transparent" } };

const Filter: React.FC<{ loading: boolean }> = ({ loading }) => {
  const filter = useAppSelector(selectPropertyFilter);

  const {
    searchParams,
    onChangeSearchParams,
    onSelectSearchParams,
    onMultipleSelectSearchParams,
  } = usePropertyFilterContext();

  return loading ? (
    <FilterSkeleton />
  ) : (
    <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" gap={3}>
      <TextField
        name="search"
        value={searchParams.search}
        onChange={onChangeSearchParams}
        placeholder="Enter an address, city or title"
        sx={{ flex: 1, flexBasis: ["auto", "140px"] }}
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
          name: "propertyStatus",
          onChange: onSelectSearchParams,
          value: searchParams.propertyStatus,
        }}
      />

      <Form.FormSelectField
        label="Type"
        passEvent={true}
        list={filter.propertyTypes}
        fieldProps={{
          name: "propertyType",
          onChange: onSelectSearchParams,
          value: searchParams.propertyType,
        }}
      />

      <Form.FormSelectField
        label="Country"
        passEvent={true}
        list={filter.countries}
        fieldProps={{
          name: "country",
          onChange: onSelectSearchParams,
          value: searchParams.country,
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
                name: "state",
                onChange: onSelectSearchParams,
                value: searchParams.state,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <Form.FormMultipleSelectField
              label="Room Types"
              passEvent={true}
              list={filter.roomTypes}
              fieldProps={{
                name: "rooms",
                onChange: onMultipleSelectSearchParams,
                value: searchParams.rooms,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <Form.FormMultipleSelectField
              label="Features"
              passEvent={true}
              list={filter.propertyFeatures}
              fieldProps={{
                name: "features",
                onChange: onMultipleSelectSearchParams,
                value: searchParams.features,
              }}
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <TextField
              name="price[gte]"
              value={searchParams["price[gte]"]}
              onChange={onChangeSearchParams}
              placeholder="Min Price"
              fullWidth
            />
          </MenuItem>

          <MenuItem sx={menuItemStyles}>
            <TextField
              name="price[lte]"
              value={searchParams["price[lte]"]}
              onChange={onChangeSearchParams}
              placeholder="Max Price"
              fullWidth
            />
          </MenuItem>
        </MoreFilterBody>
      </div>
    </Stack>
  );
};

export default Filter;
