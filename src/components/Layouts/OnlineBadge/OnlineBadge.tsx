import { Badge } from "@mui/material";

type OnlineBadgeT = {};

const OnlineBadge: React.FC<OnlineBadgeT> = () => {
  return (
    <Badge
      invisible={true}
      variant="dot"
      sx={{
        right: 0,
        bottom: 0,
        width: "20%",
        height: "20%",
        position: "absolute",
        borderRadius: "100%",
        transform: "translate(15%,-50%)",
        backgroundColor: "app_green.main",
        border: "1px solid #fff",
      }}
    />
  );
};

export default OnlineBadge;
