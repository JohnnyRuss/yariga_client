import React from "react";

import {
  // PropertyCard
  ContentBox,
} from "components/Layouts";
import AllPropertiesHeader from "./components/AllPropertiesHeader";

const AllProperties: React.FC = () => {
  return (
    <ContentBox>
      <AllPropertiesHeader />
    </ContentBox>
  );
};

export default AllProperties;
