import { Box } from "@mui/material";
import { ButtonGroupProps } from "react-multi-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const SliderButtons: React.FC = ({ next, previous }: ButtonGroupProps) => {
  const onPrevious = () => previous && previous();
  const onNext = () => next && next();

  return (
    <Box
      left={{ xs: "-20px", sm: "-45px" }}
      right={{ xs: "-20px", sm: "-45px" }}
      width={{ xs: "calc(100% + 40px)", sm: "calc(100% + 90px)" }}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 99,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <button className="custom-button" onClick={onPrevious}>
        <ArrowLeftOutlined />
      </button>

      <button className="custom-button" onClick={onNext}>
        <ArrowRightOutlined />
      </button>
    </Box>
  );
};

export default SliderButtons;
