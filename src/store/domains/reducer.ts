import { createStore, compose } from "redux";
import { combineReducers, install as installLoop, Cmd, loop } from "redux-loop";

import type { LoopReducer } from "redux-loop";
import { request, createSubscription } from "../api";
import {
  subscriptionSuccessAction,
  requestSuccessAction,
  itemsUpdatedAction,
  unsubscriptionSuccessAction,
} from "../../actions";
import { subscribeToItems, unsubscribeToItems } from "../subscribe";
import type { Action, AppState, Store } from "../../types/redux";
import type { StoreCreator as LoopStoreCreator } from "redux-loop";
import type { StoreEnhancer } from "redux";

export const initialState = {
  loading: false,
  items: [],
  subscribersCount: 0,
};

export interface ExampleState {
  loading?: boolean;
  items: object;
  subscribersCount: number;
}

export const reducer: LoopReducer<ExampleState | undefined, Action> = (
  state: ExampleState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "SUBSCRIBE":
      console.log("sub");
      if (state.subscribersCount >= 1) {
        return {
          ...state,
          subscribersCount: state.subscribersCount + 1,
        };
      }

      return loop(
        { ...state, loading: true, subscribersCount: 1 },
        Cmd.list([
          Cmd.run(request, {
            successActionCreator: requestSuccessAction,
          }),
          Cmd.run(subscribeToItems, {
            args: [Cmd.dispatch],
          }),
        ])
      );

    case "UNSUBSCRIBE":
      console.log("unsub");
      if (state.subscribersCount > 1) {
        return {
          ...state,
          subscribersCount: state.subscribersCount - 1,
        };
      }

      return loop(
        { ...state, subscribersCount: 0 },
        Cmd.run(unsubscribeToItems)
      );
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "ITEMS_UPDATED":
      console.log(state);
      return {
        ...state,
        items: action.payload.concat(state.items).slice(0, 5),
      };
    default:
      return state;
  }
};
