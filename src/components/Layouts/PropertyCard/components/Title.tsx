import { Typography } from "@mui/material";

interface TitleT {
  title: string;
}

const Title: React.FC<TitleT> = ({ title }) => {
  return (
    <Typography
      fontSize={16}
      fontWeight={600}
      color="app_text.dark"
      className="line-clamp-1"
      title={title}
      textTransform="capitalize"
    >
      {title}
    </Typography>
  );
};

export default Title;
