import { Outlet } from "react-router-dom";

import * as UI from "./components";
import { ContentBox } from "components/Layouts";

const ReviewsBox: React.FC = () => {
  return (
    <ContentBox>
      <UI.ReviewsHeader />

      <Outlet />
    </ContentBox>
  );
};

export default ReviewsBox;
