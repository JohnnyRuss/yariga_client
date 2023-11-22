/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { useHireAgentQuery } from "hooks/api/agents";
import { useAppContext } from "providers/AppProvider";
import { selectHireAgentStatus } from "store/selectors/agent.selectors";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";
import { Modal, Spinner } from "components/Layouts";

import { HIRED_BY } from "interface/db/agent.types";

interface HireAgentModalT {
  open: boolean;
  onClose: () => void;
  propertyId?: string;
  agentId?: string;
  hiredBy: keyof typeof HIRED_BY;
}

const HireAgentModal: React.FC<HireAgentModalT> = ({
  open,
  hiredBy,
  onClose,
  agentId,
  propertyId,
}) => {
  const [searchAgent, setSearchAgent] = useState("");

  const { hireAgentQuery } = useHireAgentQuery();

  const status = useAppSelector(selectHireAgentStatus);

  const { setSnackbar } = useAppContext();

  const setModalDefaults = () => {
    onClose();
    setSearchAgent("");
  };

  useEffect(() => {
    if (status.status === "SUCCESS") {
      setModalDefaults();

      setSnackbar({
        open: true,
        severity: "success",
        message: "Agent is Hired successfully",
      });
    } else if (status.status === "FAIL")
      setSnackbar({
        open: true,
        severity: "error",
        message: status.message,
      });
  }, [status.status]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        pt="60px"
        pb="30px"
        px="20px"
        borderRadius="10px"
        bgcolor="app_bg.main"
      >
        <Stack
          gap={2}
          position="relative"
          width={{ xs: "95vw", md: "70vh" }}
          height={{ xs: "90vh", md: "70vh" }}
        >
          <UI.SearchBar
            hiredBy={hiredBy}
            searchAgent={searchAgent}
            setSearchAgent={setSearchAgent}
          />

          {hiredBy === "AGENT" && (
            <UI.HireByAgent
              searchStr={searchAgent}
              onHire={({ agentId }) =>
                hireAgentQuery({
                  agentId,
                  propertyId: propertyId || "",
                  hiredBy,
                })
              }
            />
          )}

          {hiredBy === "PROPERTY" && (
            <UI.HireByProperty
              searchStr={searchAgent}
              onHire={({ propertyId }) =>
                hireAgentQuery({ propertyId, agentId: agentId || "", hiredBy })
              }
            />
          )}

          {status.loading && <Spinner />}
        </Stack>
      </Box>
    </Modal>
  );
};

export default HireAgentModal;
