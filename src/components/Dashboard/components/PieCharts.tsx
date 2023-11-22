import { DASHBOARD_PIE_CHARTS } from "config/constants";

import { Box } from "@mui/material";
import { PieChart } from "components/Layouts";

const PieCharts: React.FC = () => {
  return (
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
      {DASHBOARD_PIE_CHARTS.map((chart) => (
        <PieChart
          key={chart.id}
          title={chart.title}
          value={chart.value}
          series={chart.series}
          colors={chart.colors}
          mainBoxProps={{
            pl: 3.5,
            boxShadow: 5,
          }}
        />
      ))}
    </Box>
  );
};

export default PieCharts;
