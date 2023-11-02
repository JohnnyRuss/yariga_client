import React from "react";

import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";

import { HireByT } from "interface/db/agent.types";

interface SearchBarT {
  setSearchAgent: React.Dispatch<React.SetStateAction<string>>;
  hiredBy: keyof typeof HireByT;
  searchAgent: string;
}

const SearchBar: React.FC<SearchBarT> = ({
  hiredBy,
  setSearchAgent,
  searchAgent,
}) => {
  return (
    <TextField
      type="text"
      onChange={(e) => setSearchAgent(e.target.value)}
      value={searchAgent}
      placeholder={
        hiredBy === "AGENT"
          ? "Search Agent by name or email"
          : "Search Property by title or location"
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
