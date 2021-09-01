import type { StoreEnhancer } from "redux";
import type { StoreCreator as LoopStoreCreator } from "redux-loop";
import type { Action, AppState, Store } from "../types/redux";
import { createStore } from "redux";
import { combineReducers, install as installLoop } from "redux-loop";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { EXAMPLE_SLICE_KEY, exampleReducer } from "./domains/example";
import { EXAMPLES_SLICE_KEY, examplesReducer } from "./entities/examples";


const rootReducer = combineReducers<AppState, Action>({
  [EXAMPLE_SLICE_KEY]: exampleReducer,
  [EXAMPLES_SLICE_KEY]: examplesReducer,

});

const configureStore = (preloadedState?: AppState): Store => {
  const enhancers: StoreEnhancer<AppState> = composeWithDevTools(installLoop());
  return (createStore as LoopStoreCreator)(
    rootReducer,
    preloadedState,
    enhancers
  );
};

// WARNING: Only update this variable on the client.
let store: Store | undefined;

export const getOrCreateStore = (preloadedState?: AppState): Store => {
  // Always create a new store on the server.
  if (typeof window === "undefined") {
    return configureStore(preloadedState);
  }

  if (!store) {
    store = configureStore(preloadedState);
  }

  return store;
};
