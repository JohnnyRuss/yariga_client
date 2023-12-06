import { SxProps, Typography } from "@mui/material";

type LineClampT = {
  children: React.ReactNode;
  clamp: number;
  title?: string;
  sx?: SxProps;
};

const LineClamp: React.FC<LineClampT> = ({ children, clamp, title, sx }) => {
  return (
    <Typography
      title={title || ""}
      sx={{
        maxWidth: "100%",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: clamp,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default LineClamp;
