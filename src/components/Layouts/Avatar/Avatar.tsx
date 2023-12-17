import { Box } from "@mui/material";

type AvatarT = {
  src: string;
  alt: string;
  width?: string | { [key: string]: string };
  fit?: "contain" | "cover";
  loading?: "lazy" | "eager";
  variant?: "circular" | "rounded";
};

const Avatar: React.FC<AvatarT> = ({
  alt,
  src,
  variant = "circular",
  fit = "cover",
  width = "45px",
  loading = "lazy",
}) => {
  return (
    <Box
      component="figure"
      width={width}
      minWidth={width}
      minHeight={width}
      height={width}
      overflow="hidden"
      borderRadius={variant === "circular" ? "100%" : "10px"}
      className="image-placeholder"
    >
      <img
        width="100%"
        height="100%"
        src={src}
        alt={alt}
        title={alt}
        loading={loading}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: fit }}
      />
    </Box>
  );
};

export default Avatar;
