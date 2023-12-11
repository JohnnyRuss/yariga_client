import { Outlet } from "react-router-dom";

import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox } from "components/Layouts";

const ReviewsBox: React.FC = () => {
  return (
    <ContentBox>
      <Stack
        m={0}
        pb={1}
        minHeight={{ xs: "89vh", md: "auto" }}
        overflow="hidden"
        bgcolor={{ xs: "app_bg.main", md: "transparent" }}
      >
        <UI.ReviewsHeader />

        <Outlet />
      </Stack>
    </ContentBox>
  );
};

export default ReviewsBox;
