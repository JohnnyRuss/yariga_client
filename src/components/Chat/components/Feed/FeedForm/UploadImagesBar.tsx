import { nanoid } from "@reduxjs/toolkit";
import { Stack, Box, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

import { CloudinaryUploadItemT } from "services/cloudinary";

type UploadImagesBarT = {
  imagesToUpload: Array<CloudinaryUploadItemT>;
  onRemoveImage: (src: string) => void;
};

const UploadImagesBar: React.FC<UploadImagesBarT> = ({
  imagesToUpload,
  onRemoveImage,
}) => {
  return (
    <Stack direction="row" gap={1} px={1}>
      {imagesToUpload.map((item) => (
        <Box
          component="figure"
          width="70px"
          height="70px"
          borderRadius="5px"
          overflow="hidden"
          position="relative"
          key={nanoid()}
        >
          <Box
            component="img"
            src={item.base64url}
            alt="test"
            width="100%"
            height="100%"
            loading="eager"
            sx={{ objectFit: "cover" }}
          />

          <Button
            variant="text"
            onClick={() => onRemoveImage(item.base64url)}
            sx={{
              top: "4px",
              right: "4px",
              width: "18px",
              height: "18px",
              minWidth: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              position: "absolute",
              color: "app_text.dark",
              backgroundColor: "app_text.light",

              "&:hover": {
                color: "app_text.dark",
                backgroundColor: "app_text.light",
              },
            }}
          >
            <Close sx={{ fontSize: "14px" }} />
          </Button>

          {item.progress < 100 && (
            <Box
              left={0}
              right={0}
              bottom={0}
              height="5px"
              width="100%"
              position="absolute"
              bgcolor="app_text.contrastText"
            >
              <Box
                zIndex={1}
                bgcolor="app_blue.light"
                sx={{ height: "100%", width: `${item.progress}%` }}
              />
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default UploadImagesBar;
