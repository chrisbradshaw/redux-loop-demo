import type { TypedUseSelectorHook } from "react-redux";
import type { AppState, Dispatch } from "../types/redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

export const useDispatch = (): Dispatch => useReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
