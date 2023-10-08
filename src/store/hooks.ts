import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DispatchT, RootStateT } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
export const useAppDispatch: () => DispatchT = useDispatch;
