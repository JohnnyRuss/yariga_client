import React from "react";
import { Link } from "react-router-dom";

import { dynamic_paths } from "config/paths";

import { Card } from "@mui/material";
import AgentCardMedia from "./components/AgentCardMedia";
// import AgentMoreButton from "./components/AgentMoreButton";
import AgentCardContent from "./components/AgentCardContent";

import { AgentShortInfoT } from "interface/db/agent.types";

interface AgentCardT {
  agent: AgentShortInfoT;
}

const AgentCard: React.FC<AgentCardT> = ({ agent }) => {
  return (
    <Link
      to={dynamic_paths.agent_page(agent._id)}
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
        {/* <AgentMoreButton /> */}

        <AgentCardMedia src={agent.avatar} />

        <AgentCardContent
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
