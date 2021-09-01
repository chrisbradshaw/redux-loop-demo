import type { AppState } from "../../../types/redux";
import type { ExamplesState } from "./examples-reducer";
import { createSelector } from "reselect";
import { EXAMPLES_SLICE_KEY } from "./examples-reducer";

export const selectExamplesSlice = (state: AppState): ExamplesState =>
  state[EXAMPLES_SLICE_KEY];

export const selectExampleIds = (state: AppState): ExamplesState["ids"] =>
  selectExamplesSlice(state).ids;

export const selectExampleEntities = (
  state: AppState
): ExamplesState["entities"] => selectExamplesSlice(state).entities;

export const selectExamplesList = createSelector(
  selectExampleIds,
  selectExampleEntities,
  (exampleIds: any, exampleEntities: any) => exampleIds.map((id: string) => exampleEntities[id])
);
