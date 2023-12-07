import { Tooltip, Box } from "@mui/material";

type ImageUploadTooltipT = {
  children: React.ReactNode;
  isUploadingImages: boolean;
};

const ImageUploadTooltip: React.FC<ImageUploadTooltipT> = ({
  children,
  isUploadingImages,
}) => {
  return (
    <Tooltip
      disableHoverListener={!isUploadingImages}
      disableTouchListener={!isUploadingImages}
      title={
        <Box p={1} fontSize={14}>
          Image upload in process.
        </Box>
      }
    >
      <div>{children}</div>
    </Tooltip>
  );
};

export default ImageUploadTooltip;
