import { Stack } from "@mui/material";
import { PropertyStatus, PropertyPrice } from "components/Layouts";

import { PropertyShortInfoT } from "interface/db/properties.types";

interface StatusAndPriceT {
  price: PropertyShortInfoT["price"];
  status: PropertyShortInfoT["propertyStatus"];
}

const StatusAndPrice: React.FC<StatusAndPriceT> = ({ price, status }) => {
  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <PropertyPrice price={price} />
      <PropertyStatus status={status} />
    </Stack>
  );
};

export default StatusAndPrice;
