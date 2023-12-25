import { Typography, Stack } from "@mui/material";
import { ArrowCircleUpRounded } from "@mui/icons-material";

type AddressTypesHeaderLabelT = {
  title: string;
  min: number;
  max: number;
};

const AddressTypesHeaderLabel: React.FC<AddressTypesHeaderLabelT> = ({
  title,
  max,
  min,
}) => {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap" alignItems="center">
      <Typography fontSize={28} fontWeight={700} color="app_text.dark">
        {title}
      </Typography>

      <Stack direction="row" alignItems="center" gap={1}>
        <ArrowCircleUpRounded sx={{ fontSize: 30, color: "app_blue.light" }} />
        <Stack>
          <Typography fontSize={15} color="app_blue.light">
            min
          </Typography>

          <Typography fontSize={12} color="app_text.main">
            {min.toLocaleString()}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" gap={1}>
        <ArrowCircleUpRounded
          sx={{
            fontSize: 30,
            color: "app_blue.light",
            transform: "rotate(180deg)",
          }}
        />
        <Stack>
          <Typography fontSize={15} color="app_blue.light">
            max
          </Typography>

          <Typography fontSize={12} color="app_text.main">
            {max.toLocaleString()}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddressTypesHeaderLabel;
