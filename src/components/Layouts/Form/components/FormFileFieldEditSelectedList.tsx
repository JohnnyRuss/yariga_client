import { nanoid } from "@reduxjs/toolkit";

import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import IconButton from "./IconButton";
import { CloseRounded } from "@mui/icons-material";
import { Modal, SectionTitle } from "components/Layouts";

type FormFileFieldEditSelectedListT = {
  value: Array<string>;
  open: boolean;
  onRemoveFile: (fileURL: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const removeImageBtnStyles = {
  position: "relative",
  "@media (hover:hover)": {
    "&:hover .asset-remove__btn": { display: "block" },

    ".asset-remove__btn": {
      display: "none",
    },
  },
};

const FormFileFieldEditSelectedList: React.FC<
  FormFileFieldEditSelectedListT
> = ({ value, open, setOpen, onRemoveFile }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        px={2}
        pt={4}
        pb={2}
        width={{ xs: "100vw", md: "85vw" }}
        height={{ xs: "100vh", md: "85vh" }}
        borderRadius={{ xs: 0, md: "10px" }}
        sx={{ backgroundColor: "app_text.light" }}
      >
        <Box pb={2}>
          <SectionTitle title="Remove Images" />
        </Box>

        <Box height="100%" overflow="hidden" pb={1}>
          <Box
            sx={{ paddingRight: 2, height: "100%" }}
            className="custom_scrollbar"
          >
            <Masonry columns={{ xs: 2, md: 4 }} spacing={1}>
              {value.map((item) => (
                <Box
                  component="figure"
                  key={nanoid()}
                  sx={removeImageBtnStyles}
                >
                  <Box className="asset-remove__btn">
                    <IconButton
                      width="30px"
                      height="30px"
                      onClick={() => onRemoveFile(item)}
                    >
                      <CloseRounded sx={{ fontSize: "16px" }} />
                    </IconButton>
                  </Box>

                  <img
                    src={item}
                    alt={item}
                    loading="lazy"
                    style={{
                      borderRadius: 4,
                      display: "block",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))}
            </Masonry>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default FormFileFieldEditSelectedList;
