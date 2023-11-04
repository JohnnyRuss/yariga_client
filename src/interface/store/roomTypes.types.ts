import { LoadingStatusT } from "./common.types";
import { RoomTypeT } from "interface/db/properties.types";

export interface RoomTypesStateT {
  status: LoadingStatusT;
  roomTypes: RoomTypeT[];
}
