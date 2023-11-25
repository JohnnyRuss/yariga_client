import { useState } from "react";

import "react-image-crop/dist/ReactCrop.css";
import { type Crop } from "react-image-crop";

import { Modal, Button } from "components/Layouts";
import { Box, Typography, Stack } from "@mui/material";
import ImageCrop from "./ImageCrop";
import ImageCropPlaceholder from "./ImageCropPlaceholder";
import ChangeImageRoundedButton from "./ChangeImageRoundedButton";

type ChangeImageModalT = {};

const ChangeImageModal: React.FC<ChangeImageModalT> = () => {
  const [file, setFile] = useState<string>("");

  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(
    null
  );

  const [crop, setCrop] = useState<Crop>({
    height: 260,
    width: 260,
    unit: "px",
    x: 50,
    y: 0,
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files?.[0];
    if (!target) return;

    const imgURL = URL.createObjectURL(target);

    const imgEl = new Image();
    imgEl.src = imgURL;

    imgEl.onload = () => {
      setFile(imgURL);
      setOriginalImage(imgEl);
    };
  };

  const getCroppedImg = () => {
    const renderedImage = document.querySelector(".image-crop__img");

    if (!renderedImage || !originalImage) return;

    const { width: renderedX, height: renderedY } =
      renderedImage.getBoundingClientRect();

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width;
    canvas.height = crop.height;

    const scaleX = originalImage.naturalWidth / renderedX;
    const scaleY = originalImage.naturalHeight / renderedY;

    if (ctx) {
      ctx.drawImage(
        originalImage,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
    }

    return canvas.toDataURL("image/png");
  };

  const onSetProfilePicture = () => {
    const dataURL = getCroppedImg();
    console.log(dataURL);
  };

  return (
    <Modal open={true} onClose={() => {}}>
      <Stack
        sx={{
          padding: 2,
          gap: 2,
          paddingTop: 7,
          width: "50vw",
          borderRadius: "10px",
          backgroundColor: "app_text.light",
          position: "relative",
        }}
      >
        {file && <ChangeImageRoundedButton onFileChange={onFileChange} />}

        <Box sx={{ justifySelf: "flex-start", mb: "auto" }}>
          <Typography fontSize={22} fontWeight={600}>
            Update Profile Image
          </Typography>
        </Box>

        {file && <ImageCrop file={file} crop={crop} setCrop={setCrop} />}

        {!file && <ImageCropPlaceholder onFileChange={onFileChange} />}

        <Box>
          <Button
            title="Apply"
            fullWidth={true}
            onClick={onSetProfilePicture}
          />
        </Box>
      </Stack>
    </Modal>
  );
};

export default ChangeImageModal;
