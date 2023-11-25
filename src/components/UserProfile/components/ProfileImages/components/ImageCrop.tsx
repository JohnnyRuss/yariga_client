import ReactCrop, { type Crop } from "react-image-crop";

import { Stack } from "@mui/material";
import CropSelection from "./CropSelection";
import "./imageCrop.css";

type ImageCropT = {
  file: string;
  crop: Crop;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
};

const ImageCrop: React.FC<ImageCropT> = ({ file, crop, setCrop }) => {
  return (
    <ReactCrop
      crop={crop}
      onChange={(c) => setCrop(c)}
      ruleOfThirds={true}
      aspect={1 / 1}
      minWidth={260}
      minHeight={260}
      renderSelectionAddon={() => (
        <CropSelection width={crop.width} height={crop.height} />
      )}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        bgcolor="green"
      >
        <img alt="crop" className="image-crop__img" src={file} />
      </Stack>
    </ReactCrop>
  );
};

export default ImageCrop;
