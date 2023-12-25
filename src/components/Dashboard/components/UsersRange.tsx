import ReactApexChart from "react-apexcharts";
import { Box, Stack, Typography } from "@mui/material";

import { usersRangeOptions } from "config/constants";
import { UserRangeT } from "interface/db/dashboard.types";

type UsersRangeT = {
  usersRange: Array<UserRangeT>;
};

const UsersRange: React.FC<UsersRangeT> = ({ usersRange }) => {
  const range = usersRange.sort((rangeA, rangeB) =>
    rangeA.month > rangeB.month ? 1 : -1
  );

  const totalUsers = range.reduce((acc, block) => (acc += block.usersCount), 0);

  const series = range.map((block) => block.usersCount);
  const categories = range.map((block) => `${block.year} ${block.title}`);
  const max = Math.max(...series);

  return (
    <Box
      py={2}
      gap={2}
      flex={1}
      boxShadow={5}
      display="flex"
      minHeight="110px"
      alignItems="center"
      width="100%"
      borderRadius="15px"
      bgcolor="app_text.light"
      justifyContent="space-between"
    >
      <Stack pl={3.5}>
        <Typography fontSize={14} color="app_text.main">
          Users
        </Typography>
        <Typography fontSize={24} color="app_text.dark" fontWeight={700} mt={1}>
          {totalUsers}
        </Typography>
      </Stack>

      <ReactApexChart
        type="line"
        width="100%"
        height="100%"
        series={[{ data: series, name: "Users" }]}
        options={usersRangeOptions(categories, max)}
      />
    </Box>
  );
};

export default UsersRange;
