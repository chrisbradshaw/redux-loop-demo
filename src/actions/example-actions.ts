import type { Action } from "../types/redux";
import type { Example } from "../types/entities/example";

const prefix = (actionType: string) => `@example-actions/${actionType}`;

export const INCREMENT_CLICKED = prefix("INCREMENT_CLICKED");
export const EXAMPLES_FETCH_SUCCEEDED = prefix("EXAMPLES_FETCH_SUCCEEDED");

export const incrementClicked = (): Action => ({ type: INCREMENT_CLICKED });

export const examplesFetchSucceeded = (examples: Array<Example>): Action => ({
  type: EXAMPLES_FETCH_SUCCEEDED,
  payload: examples,
});
