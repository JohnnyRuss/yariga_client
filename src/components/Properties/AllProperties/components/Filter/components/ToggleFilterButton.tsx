import { Button, Box } from "@mui/material";
import { FilterList, FilterListOff } from "@mui/icons-material";

type ToggleFilterButtonT = {
  onToggle: () => void;
  toggle: boolean;
};

const ToggleFilterButton: React.FC<ToggleFilterButtonT> = ({
  onToggle,
  toggle,
}) => {
  return (
    <Box display={{ xs: "flex", md: "none" }}>
      <Button
        onClick={onToggle}
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "app_bg.dark",
          color: "app_text.dark",
          display: "flex",
          justifyContent: "space-between",

          "&:hover,&:active,&:focus": {
            backgroundColor: "app_bg.dark",
            color: "app_text.dark",
          },
        }}
      >
        Filter
        {toggle ? <FilterListOff /> : <FilterList />}
      </Button>
    </Box>
  );
};

export default ToggleFilterButton;
