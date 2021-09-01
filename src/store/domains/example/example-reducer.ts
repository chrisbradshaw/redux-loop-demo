import type { LoopReducer } from "redux-loop";
import type { Action } from "../../../types/redux";
import { Cmd, loop } from "redux-loop";
import {
  EXAMPLES_FETCH_SUCCEEDED,
  INCREMENT_CLICKED,
} from "../../../actions/example-actions";

export interface ExampleState {
  count: number;
  fetchCount: number;
  loopRunning: boolean;
}

export const EXAMPLE_SLICE_KEY = "example";

const exampleLoop = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 2000);
  });

const LOOP_FINISHED = "@example-reducers/LOOP_FINISHED";
const loopFinished = () => ({ type: LOOP_FINISHED });

export const initialState: ExampleState = {
  count: 0,
  fetchCount: 0,
  loopRunning: false,
};

export const exampleReducer: LoopReducer<ExampleState, Action> = (
  state: ExampleState = initialState,
  action: Action
) => {
  switch (action.type) {
    case INCREMENT_CLICKED: {
      return loop(
        { ...state, count: state.count + 1, loopRunning: true },
        Cmd.run(exampleLoop, {
          successActionCreator: loopFinished,
        })
      );
    }
    case LOOP_FINISHED: {
      return { ...state, loopRunning: false };
    }
    case EXAMPLES_FETCH_SUCCEEDED: {
      return { ...state, fetchCount: state.fetchCount + 1 };
    }
    default: {
      return state;
    }
  }
};
