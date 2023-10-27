import React from "react";

import { PIE_CHARTS } from "config/constants";
import { Box, Typography, Divider, Stack } from "@mui/material";
import { PieChart } from "components/Dashboard/components";

interface AgentDetailsT {}

const AgentDetails: React.FC<AgentDetailsT> = () => {
  return (
    <Box
      sx={{
        backgroundColor: "app_bg.main",
        borderRadius: "10px",
        padding: "20px",
        height: "100%",
      }}
    >
      <Typography fontSize={18} fontWeight={600} pb="15px">
        Agent Details
      </Typography>

      <Divider />

      <Typography color="app_text.main" mt="20px">
        Talent customers tend to earn a basic salary in the range of £15,000 to
        £35,000 per annum. However, talented customers also earn a commission
        for finding their client's work. Typically, agents receive around 10% of
        what the client is paid.
      </Typography>

      <Stack gap="10px" mt="30px" pb="25px">
        <Stack direction="row" alignItems="center">
          <Box>✔</Box>
          <Typography ml="15px" width="150px" fontSize={14}>
            Agency
          </Typography>
          <Typography component="span" fontSize={14}>
            :
          </Typography>
          <Typography ml="30px" fontSize={14} color="app_text.main">
            All American Real Estate
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Box>✔</Box>
          <Typography ml="15px" width="150px" fontSize={14}>
            Agent License
          </Typography>
          <Typography component="span" fontSize={14}>
            :
          </Typography>
          <Typography ml="30px" fontSize={14} color="app_text.main">
            3124 9764 9700 234
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Box>✔</Box>
          <Typography ml="15px" width="150px" fontSize={14}>
            Tax Number
          </Typography>
          <Typography component="span" fontSize={14}>
            :
          </Typography>
          <Typography ml="30px" fontSize={14} color="app_text.main">
            TX 87D0 678H PQ45
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Box>✔</Box>
          <Typography ml="15px" width="150px" fontSize={14}>
            Service area
          </Typography>
          <Typography component="span" fontSize={14}>
            :
          </Typography>
          <Typography ml="30px" fontSize={14} color="app_text.main">
            Chicago, Los Angeles, New York, Miami beach
          </Typography>
        </Stack>
      </Stack>

      <Divider />

      <Typography fontSize={18} fontWeight={600} py="15px">
        Agent Status
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={4}>
        {PIE_CHARTS.map((chart) => (
          <PieChart
            key={chart.id}
            title={chart.title}
            value={chart.value}
            series={chart.series}
            colors={chart.colors}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AgentDetails;
