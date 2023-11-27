import { Box, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type SearchT = {};

const Search: React.FC<SearchT> = () => {
  return (
    <Box height="55px">
      <TextField
        fullWidth
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
