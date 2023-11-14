import { useAppDispatch } from "store/hooks";
import { roomTypesActions } from "store/reducers/roomTypes.reducer";

export default function useRoomTypesQuery() {
  const dispatch = useAppDispatch();

  const getRoomTypes = () => dispatch(roomTypesActions.getAllRoomTypes());

  const cleanUpRoomTypes = () => dispatch(roomTypesActions.cleanUpRoomTypes());

  return { getRoomTypes, cleanUpRoomTypes };
}
