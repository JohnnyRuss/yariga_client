import { useState } from "react";
import { useAppSelector } from "store/hooks";
import { selectDeleteAccountStatus } from "store/selectors/auth.selectors";

import { Modal, Spinner } from "components/Layouts";
import {
  Stack,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type ConfirmAccountDeletionModalT = {
  open: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onConfirmAccountDeletion: () => void;
};

const ConfirmAccountDeletionModal: React.FC<ConfirmAccountDeletionModalT> = ({
  open,
  onClose,
  value,
  onChange,
  onConfirmAccountDeletion,
}) => {
  const status = useAppSelector(selectDeleteAccountStatus);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal open={open} onClose={onClose} disableClose={status.loading}>
      <Stack
        bgcolor="app_bg.main"
        width={{ xs: "25vw" }}
        height={{ xs: "30vh" }}
        px={3}
        pt={6}
        pb={2}
        borderRadius={2}
        justifyContent="space-between"
      >
        {status.loading && <Spinner />}

        <Typography fontWeight={600} fontSize={24}>
          Enter your password
        </Typography>

        <TextField
          placeholder="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="start"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {status.loading && (
          <Typography color="app_text.main" fontWeight={600} textAlign="center">
            This may take couple of minute
          </Typography>
        )}

        {status.error && (
          <Typography color="error.main" textAlign="center">
            {status.message}
          </Typography>
        )}

        <Button
          variant="contained"
          disabled={status.loading}
          onClick={onConfirmAccountDeletion}
          sx={{
            backgroundColor: "app_blue.light",
            padding: "10px 0",
            "&:hover": { backgroundColor: "app_blue.light" },
          }}
        >
          Delete Account
        </Button>
      </Stack>
    </Modal>
  );
};

export default ConfirmAccountDeletionModal;
