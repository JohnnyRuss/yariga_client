import ReactCrop from "react-image-crop";
import { useImageCropContext } from "providers/ImageCropProvide";

import "./imageCrop.css";
import { Stack, Box } from "@mui/material";
import CropSelection from "./CropSelection";

type ImageCropT = {
  disabled: boolean;
};

const ImageCrop: React.FC<ImageCropT> = ({ disabled }) => {
  const { crop, setCrop, file } = useImageCropContext();

  return (
    <Box
      sx={{
        margin: "auto 0",
        maxHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        ruleOfThirds={true}
        aspect={1 / 1}
        minWidth={260}
        minHeight={260}
        maxWidth={480}
        maxHeight={480}
        disabled={disabled}
        renderSelectionAddon={() => (
          <CropSelection width={crop.width} height={crop.height} />
        )}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          height="100%"
          maxHeight="50vh"
          bgcolor="green"
        >
          <img alt="crop" className="image-crop__img" src={file} />
        </Stack>
      </ReactCrop>
    </Box>
  );
};

export default ImageCrop;
