import { createStore, compose } from "redux";
import { combineReducers, install as installLoop, Cmd, loop } from "redux-loop";

import type { LoopReducer } from "redux-loop";
import { request, createSubscription } from "./api";
import {
  subscriptionSuccessAction,
  requestSuccessAction,
  itemsUpdatedAction,
  unsubscriptionSuccessAction,
} from "../actions";
import { subscribeToItems, unsubscribeToItems } from "./subscribe";
import type { Action, AppState, Store } from "../types/redux";
import type { StoreCreator as LoopStoreCreator } from "redux-loop";
import type { StoreEnhancer } from "redux";
import { reducer, initialState } from "./domains/reducer";

const enhancer = compose(installLoop());

export const store = (createStore as LoopStoreCreator)(
  reducer as any,
  initialState,
  enhancer
);
