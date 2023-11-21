import { LoadingStatusT } from "./common.types";
import { RoomTypeT } from "interface/db/properties.types";

type RoomTypesStateT = {
  status: LoadingStatusT;
  roomTypes: RoomTypeT[];
};

export type { RoomTypesStateT };
