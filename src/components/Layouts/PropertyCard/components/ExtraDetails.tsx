import React from "react";

import { Stack, Box } from "@mui/material";
import ExtraDetailIcon from "./ExtraDetailIcon";
import { BedIcon, ShowerIcon, AreaIcon } from "assets/icons";
import styles from "./propertyCard.module.css";

interface ExtraDetailsT {
  area: number;
  bedroomsAmount: number;
  bathroomsAmount?: number;
}

const ExtraDetails: React.FC<ExtraDetailsT> = ({
  area,
  bedroomsAmount,
  bathroomsAmount,
}) => {
  return (
    <Stack direction="row" justifyContent="flex-start" gap={3} fontSize={14}>
      <Box display="flex" alignItems="flex-end" gap={1}>
        <ExtraDetailIcon src={BedIcon.toString()} />

        <span className={styles.extraDetailLabel}>
          {bedroomsAmount}
          &nbsp;
          <span>Beds</span>
        </span>
      </Box>

      {bathroomsAmount && (
        <Box display="flex" alignItems="flex-end" gap={1}>
          <ExtraDetailIcon src={ShowerIcon.toString()} />

          <span className={styles.extraDetailLabel}>
            {bathroomsAmount}
            &nbsp;
            <span>Baths</span>
          </span>
        </Box>
      )}

      <Box display="flex" alignItems="flex-end" gap={1}>
        <ExtraDetailIcon src={AreaIcon.toString()} />

        <span className={styles.extraDetailLabel}>
          {area}
          <span>M²</span>
        </span>
      </Box>
    </Stack>
  );
};

export default ExtraDetails;
