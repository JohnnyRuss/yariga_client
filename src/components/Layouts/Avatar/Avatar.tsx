import { Box } from "@mui/material";
import { OnlineBadge } from "components/Layouts";

type AvatarT = {
  src: string;
  alt: string;
  width?: string | { [key: string]: string };
  fit?: "contain" | "cover";
  loading?: "lazy" | "eager";
  variant?: "circular" | "rounded";
  showBadge?: boolean;
};

const Avatar: React.FC<AvatarT> = ({
  alt,
  src,
  fit = "cover",
  width = "45px",
  loading = "lazy",
  showBadge = false,
  variant = "circular",
}) => {
  return (
    <Box
      component="figure"
      width={width}
      height={width}
      minWidth={width}
      minHeight={width}
      position="relative"
      className="image-placeholder"
      borderRadius={variant === "circular" ? "100%" : "10px"}
    >
      <img
        width="100%"
        height="100%"
        src={src}
        alt={alt}
        title={alt}
        loading={loading}
        style={{
          objectFit: fit,
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "inherit",
        }}
      />

      {showBadge && <OnlineBadge />}
    </Box>
  );
};

export default Avatar;
