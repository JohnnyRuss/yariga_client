import { useAppSelector } from "store/hooks";

import { selectAgentDetails } from "store/selectors/agent.selectors";

import { Box } from "@mui/material";
import { PieChart } from "components/Layouts";

interface AgentDetailsPieChartsT {}

const AgentDetailsPieCharts: React.FC<AgentDetailsPieChartsT> = () => {
  const { rent, sold, listing } = useAppSelector(selectAgentDetails);

  const onGoing = listing.length;

  const total = onGoing + rent + sold;

  const availableTasksOnSameTime = 5 - onGoing;

  return (
    <Box display="flex" flexWrap="wrap" gap={4} mt="20px">
      <PieChart
        title="Ongoing Listing"
        value={onGoing}
        series={[onGoing, availableTasksOnSameTime]}
        labels={["Ongoing Tasks", "Available Tasks On Same Time"]}
        colors={["#475be8", "#7ad390"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />

      <PieChart
        title="Total Listing"
        value={total}
        series={[143, total]}
        labels={["Tasks of Ongoing Year", "Total Tasks of last Year"]}
        colors={["#475be8", "#7ad390"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />

      <PieChart
        title="Properties Sold"
        value={sold}
        series={[sold, 200]}
        labels={["Sold Out Ongoing Year", "Sold Out last Year"]}
        colors={["#475be8", "#7ad390"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />

      <PieChart
        title="Properties Rent"
        value={rent}
        series={[rent, 180]}
        labels={["Rent Ongoing Year", "Rent last Year"]}
        colors={["#475be8", "#7ad390"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />
    </Box>
  );
};

export default AgentDetailsPieCharts;
