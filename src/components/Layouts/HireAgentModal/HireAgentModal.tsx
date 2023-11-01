/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import HireByAgent from "./HireByAgent";
import HireByProperty from "./HireByProperty";
import { Modal } from "components/Layouts";
import { Search } from "@mui/icons-material";
import { Stack, Box, TextField, InputAdornment } from "@mui/material";

interface HireAgentModalT {
  open: boolean;
  onClose: () => void;
  by: "AGENT" | "PROPERTY";
}

const HireAgentModal: React.FC<HireAgentModalT> = ({ open, onClose, by }) => {
  const [searchAgent, setSearchAgent] = useState("");

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        pt="60px"
        pb="30px"
        px="20px"
        borderRadius="10px"
        bgcolor="app_bg.main"
      >
        <Stack gap={2}>
          <TextField
            type="text"
            onChange={(e) => setSearchAgent(e.target.value)}
            value={searchAgent}
            placeholder={
              by === "AGENT"
                ? "Search Agent by name or email"
                : "Search Property by title or location"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          {by === "AGENT" && <HireByAgent searchStr={searchAgent} />}

          {by === "PROPERTY" && <HireByProperty searchStr={searchAgent} />}
        </Stack>
      </Box>
    </Modal>
  );
};

export default HireAgentModal;
