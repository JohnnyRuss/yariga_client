import { usePropertyFilterContext } from "providers/FilterProvider/PropertyFilterProvider";

import { ParametersIcon } from "assets/icons";
import * as MuiStyled from "./Filter.styled";

const MoreFilterButton: React.FC = () => {
  const { onOpenMoreFilter } = usePropertyFilterContext();

  return (
    <MuiStyled.MoreFilterButton onClick={onOpenMoreFilter} variant="contained">
      <svg width={20} height={20}>
        <image
          xlinkHref={ParametersIcon.toString()}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </svg>
      <span>More</span>
    </MuiStyled.MoreFilterButton>
  );
};

export default MoreFilterButton;
