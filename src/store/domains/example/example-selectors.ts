import type { AppState } from "../../../types/redux";
import type { ExampleState } from "./example-reducer";
import { EXAMPLE_SLICE_KEY } from "./example-reducer";

export const selectExampleSlice = (state: AppState): ExampleState =>
  state[EXAMPLE_SLICE_KEY];

export const selectCount = (state: AppState): ExampleState["count"] =>
  selectExampleSlice(state).count;

export const selectFetchCount = (state: AppState): ExampleState["fetchCount"] =>
  selectExampleSlice(state).fetchCount;

export const selectLoopRunning = (
  state: AppState
): ExampleState["loopRunning"] => selectExampleSlice(state).loopRunning;
