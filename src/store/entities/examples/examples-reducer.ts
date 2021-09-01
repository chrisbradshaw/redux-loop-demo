import type { LoopReducer } from "redux-loop";
import type { Action, MultiEntityState } from "../../../types/redux";
import type { Example } from "../../../types/entities/example";
import { EXAMPLES_FETCH_SUCCEEDED } from "../../../actions/example-actions";
import { normalizeEntities } from "../../../utils/normalize-entities";

export type ExamplesState = MultiEntityState<Example>;

export const EXAMPLES_SLICE_KEY = "examples";

export const initialState: ExamplesState = {
  entities: {},
  ids: [],
  lastFetched: null,
};

export const examplesReducer: LoopReducer<ExamplesState, Action> = (
  state: ExamplesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case EXAMPLES_FETCH_SUCCEEDED: {
      return {
        ...state,
        ...normalizeEntities(action.payload, "id"),
        lastFetched: Date.now(),
      };
    }
    default: {
      return state;
    }
  }
};
