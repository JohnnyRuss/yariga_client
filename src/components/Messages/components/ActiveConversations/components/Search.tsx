import { Box, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type SearchT = { disabled: boolean };

const Search: React.FC<SearchT> = ({ disabled }) => {
  return (
    <Box height="55px">
      <TextField
        fullWidth
        disabled={disabled}
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
