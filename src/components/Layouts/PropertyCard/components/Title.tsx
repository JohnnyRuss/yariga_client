import { LineClamp } from "components/Layouts";

interface TitleT {
  title: string;
}

const Title: React.FC<TitleT> = ({ title }) => {
  return (
    <LineClamp
      clamp={1}
      title={title}
      sx={{
        fontSize: 16,
        fontWeight: 600,
        color: "app_text.dark",
        textTransform: "capitalize",
      }}
    >
      {title}
    </LineClamp>
  );
};

export default Title;
