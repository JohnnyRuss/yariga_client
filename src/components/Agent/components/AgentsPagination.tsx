import { useAppSelector } from "store/hooks";

import { selectAgentsPagination } from "store/selectors/agent.selectors";

import { Box } from "@mui/material";
import { Pagination } from "components/Layouts";

const AgentsPagination: React.FC = () => {
  const { currentPage, pagesCount } = useAppSelector(selectAgentsPagination);

  return (
    <Box style={{ paddingTop: "25px", alignSelf: "flex-end" }}>
      <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    </Box>
  );
};

export default AgentsPagination;
