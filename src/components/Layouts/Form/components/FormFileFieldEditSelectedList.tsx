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

const FormFileFieldEditSelectedList: React.FC<
  FormFileFieldEditSelectedListT
> = ({ value, open, setOpen, onRemoveFile }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          backgroundColor: "app_text.light",
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <Box pb={2}>
          <SectionTitle title="Remove Images" />
        </Box>

        <Box
          sx={{
            width: "85vw",
            height: "85vh",
            overflowY: "auto",
            paddingRight: 2,
          }}
          className="custom_scrollbar"
        >
          <Masonry columns={{ xs: 2, md: 4 }} spacing={1}>
            {value.map((item) => (
              <Box
                component="figure"
                key={nanoid()}
                sx={{
                  position: "relative",
                  "&:hover .asset-remove__btn": { display: "block" },
                }}
              >
                <Box sx={{ display: "none" }} className="asset-remove__btn">
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
    </Modal>
  );
};

export default FormFileFieldEditSelectedList;
