import { Box, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { createContext, useState, useEffect } from "react";

import logger from "utils/logger";
import { axiosPublicQuery } from "services/axios";

type ServerHealthProviderT = {
  children: React.ReactNode;
};

const ServerHealthContext = createContext({});

const ServerHealthProvider: React.FC<ServerHealthProviderT> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [serverIsAlive, setServerIsAlive] = useState<boolean>(false);

  async function checkServerHealth() {
    try {
      const {
        data: { isAlive },
      }: AxiosResponse<{ isAlive: boolean }> = await axiosPublicQuery.post(
        "/health"
      );

      setServerIsAlive(isAlive);
    } catch (error) {
      logger(error);
    }
  }

  useEffect(() => {
    setIsMounted(true);
    checkServerHealth();
  }, []);

  useEffect(() => {
    if (!isMounted || serverIsAlive) return;

    const intervalId = setInterval(() => {
      checkServerHealth();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isMounted, serverIsAlive]);

  return (
    <ServerHealthContext.Provider value={{}}>
      {serverIsAlive ? (
        children
      ) : (
        <Box
          position="fixed"
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
          bgcolor="#fff"
          sx={{ inset: "0" }}
        >
          <Typography fontWeight={800} fontSize={26} letterSpacing={1.4}>
            Server is Awakening...
          </Typography>
          <Typography textAlign="center" sx={{ textDecoration: "underline" }}>
            <span>This showcase application is hosted as a free service.</span>
            <br />
            <span>
              Because of this, the initial visit may take up 1m to load data.
            </span>
            <br />
            <span>
              In order to avoid confusion whether the application is ready to
              use,
            </span>
            <br />
            <span>we are checking server health automatically.</span>
          </Typography>
          <Typography fontWeight={600}>
            Thanks for your patience 🙏✨
          </Typography>
        </Box>
      )}
    </ServerHealthContext.Provider>
  );
};

export default ServerHealthProvider;
