import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { selectPropertyFilter } from "store/selectors/properties.selectors";

import {
  Stack,
  TextField,
  InputAdornment,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import * as Form from "components/Layouts/Form";

interface FilterT {}

const Filter: React.FC<FilterT> = () => {
  const filter = useAppSelector(selectPropertyFilter);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" flexWrap="wrap" gap={3} mb={2} mt={4}>
      <TextField
        placeholder="Enter an address, city or title"
        sx={{ flex: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Form.FormSelectField
        fieldProps={{
          name: "",
          onChange: () => {},
          value: { _id: "", value: "" },
        }}
        label="Status"
        list={filter.statuses}
      />

      <Form.FormSelectField
        fieldProps={{
          name: "",
          onChange: () => {},
          value: { _id: "", value: "" },
        }}
        label="Type"
        list={filter.propertyTypes}
      />

      <Form.FormSelectField
        fieldProps={{
          name: "",
          onChange: () => {},
          value: { _id: "", value: "" },
        }}
        label="Country"
        list={filter.countries}
      />

      <Form.FormSelectField
        fieldProps={{
          name: "",
          onChange: () => {},
          value: { _id: "", value: "" },
        }}
        label="State"
        list={filter.states}
      />

      <div>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ height: "100%" }}
        >
          More
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ marginTop: "10px", minWidth: "300px" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <TextField placeholder="min price" sx={{ margin: "0 10px" }} />
          <MenuItem onClick={handleClose}>min price</MenuItem>
          <MenuItem onClick={handleClose}>max price</MenuItem>
        </Menu>
      </div>
    </Stack>
  );
};

export default Filter;
