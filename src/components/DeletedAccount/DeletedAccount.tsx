/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PATHS } from "config/paths";

import { Stack, Typography } from "@mui/material";
import { Button } from "components/Layouts";

const DeletedAccount: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const onCloseWindow = () => navigate(PATHS.auth_page_root);

  useEffect(() => {
    if (!state?.deactivated) return navigate(PATHS.auth_page_root);
  }, [state]);

  return (
    <Stack
      position="fixed"
      sx={{ inset: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      {state?.deactivated && (
        <Stack
          px={{ xs: "35px" }}
          py={{ xs: "25px" }}
          boxShadow={5}
          gap={4}
          borderRadius={2}
          alignItems="center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 9 8"
            fill="none"
          >
            <path
              d="M8 1.5L3.10002 6.5L1 4.35713"
              stroke="#1eff00"
              strokeWidth="1.07143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography fontWeight={600} fontSize={20}>
            Your account is deleted successfully
          </Typography>
          <Button title="Close" fullWidth={true} onClick={onCloseWindow} />
        </Stack>
      )}
    </Stack>
  );
};

export default DeletedAccount;
