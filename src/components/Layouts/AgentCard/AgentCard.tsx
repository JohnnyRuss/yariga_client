import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";

import { Card } from "@mui/material";
import * as UI from "./components";

import { AgentShortInfoT } from "interface/db/agent.types";

interface AgentCardT {
  agent: AgentShortInfoT;
}

const AgentCard: React.FC<AgentCardT> = ({ agent }) => {
  return (
    <Link
      to={DYNAMIC_PATHS.agent_page(agent._id)}
      className="app__card"
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: ["column", "row"],
          maxHeight: ["auto", "230px"],
          boxShadow: "none",
          position: "relative",
        }}
      >
        {/* <UI.AgentMoreButton /> */}

        <UI.AgentCardMedia src={agent.avatar} username={agent.username} />

        <UI.AgentCardContent
          email={agent.email}
          phone={agent.phone}
          username={agent.username}
          city={agent.serviceArea.city}
          listingAmount={agent.listing.length}
        />
      </Card>
    </Link>
  );
};

export default AgentCard;
