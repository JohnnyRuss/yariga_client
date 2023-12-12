import { Box, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type SearchT = {
  search: string;
  disabled: boolean;
  onSearchFocus: () => void;
  onSearchBlur: () => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchT> = ({
  search,
  disabled,
  onSearchBlur,
  onSearchFocus,
  onSearchChange,
}) => {
  return (
    <Box height="55px">
      <TextField
        fullWidth
        value={search}
        onChange={onSearchChange}
        disabled={disabled}
        onBlur={onSearchBlur}
        onFocus={onSearchFocus}
        placeholder="search for people"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
