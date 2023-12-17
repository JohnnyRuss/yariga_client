/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useImageCropContext } from "providers/ImageCropProvide";

import {
  selectEditProfileStatus,
  selectAuthenticatedUser,
} from "store/selectors/user.selectors";
import { useUserQuery } from "hooks/api/user";
import { useAppContext } from "providers/AppProvider";

import "react-image-crop/dist/ReactCrop.css";

import { Box, Typography, Stack } from "@mui/material";
import { Modal, Button, Spinner } from "components/Layouts";

import ImageCrop from "./ImageCrop";
import ImageCropPlaceholder from "./ImageCropPlaceholder";
import ChangeImageRoundedButton from "./ChangeImageRoundedButton";

const ChangeImageModal: React.FC = () => {
  const status = useAppSelector(selectEditProfileStatus);
  const authenticatedUser = useAppSelector(selectAuthenticatedUser);

  const { setSnackbar } = useAppContext();
  const { updateProfileImage, setEditProfileStatus } = useUserQuery();

  const { file, getCroppedImg, openChangeProfileModal, onCloseModal } =
    useImageCropContext();

  const onSetProfilePicture = () => {
    const file = getCroppedImg(
      document.querySelector(".image-crop__img") as HTMLImageElement
    );

    if (!file) return;

    updateProfileImage({ file, userId: authenticatedUser._id });
  };

  useEffect(() => {
    if (status.status !== "SUCCESS") return;

    onCloseModal();
    setEditProfileStatus({ stage: "default" });

    setSnackbar((prev) => ({
      ...prev,
      open: true,
      severity: "success",
      message: "Profile image updated successfully",
    }));
  }, [status]);

  return (
    <Modal open={openChangeProfileModal} onClose={onCloseModal}>
      <Stack
        width={{ xs: "100vw", md: "50vw" }}
        height={{ xs: "100vh", md: "auto" }}
        borderRadius={{ xs: "none", md: "10px" }}
        sx={{
          padding: 2,
          gap: 2,
          paddingTop: 7,
          backgroundColor: "app_text.light",
          position: "relative",
        }}
      >
        {status.loading && <Spinner />}

        {file && <ChangeImageRoundedButton />}

        <Box sx={{ justifySelf: "flex-start" }}>
          <Typography fontSize={22} fontWeight={600}>
            Update Profile Image
          </Typography>
        </Box>

        {file && <ImageCrop disabled={status.loading} />}

        {!file && <ImageCropPlaceholder />}

        <Box>
          <Button
            title="Apply"
            fullWidth={true}
            onClick={onSetProfilePicture}
            disabled={!file || status.loading}
          />
        </Box>
      </Stack>
    </Modal>
  );
};

export default ChangeImageModal;
