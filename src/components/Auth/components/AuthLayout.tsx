import { AppLogo } from "assets";
import { AuthImg } from "assets/images";
import { SVG } from "components/Layouts";
import styles from "./auth.module.css";
import { Box, Stack, Typography } from "@mui/material";

interface AuthLayoutT {
  children: React.ReactNode;
  mainText?: string;
  secondaryText?: string;
}

const AuthLayout: React.FC<AuthLayoutT> = ({
  children,
  mainText,
  secondaryText,
}) => {
  return (
    <Box position="fixed" sx={{ inset: 0 }}>
      <Stack direction="row" height="100%">
        <Box flex={1} className={styles.authFormWrapper} p={2}>
          <Box className={styles.authFormContainer}>
            <Stack gap="10px" width="100%">
              <Box display="flex" justifyContent="center">
                <SVG src={AppLogo} width="135px" height="36px" />
              </Box>

              <Typography fontWeight={600} fontSize={37}>
                {mainText}
              </Typography>

              {secondaryText && (
                <Typography color="app_text.main">{secondaryText}</Typography>
              )}
            </Stack>

            {children}
          </Box>
        </Box>

        <Box flex={1} display={{ xs: "none", app_tablet: "block" }}>
          <figure className={styles.authDecorationFig}>
            <img
              src={AuthImg}
              alt="auth decoration"
              width="100%"
              height="100%"
              title="Yariga"
              loading="eager"
            />
          </figure>
        </Box>
      </Stack>
    </Box>
  );
};

export default AuthLayout;
