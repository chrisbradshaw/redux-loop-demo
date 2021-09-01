import type {
  Action as ReduxAction,
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
} from "redux";
import type { ExampleState } from "../store/domains/example";
import type { ExamplesState } from "../store/entities/examples";

import { EXAMPLE_SLICE_KEY } from "../store/domains/example";
import { EXAMPLES_SLICE_KEY } from "../store/entities/examples";


// Import and include all reducer state types here.
export interface AppState {
  [EXAMPLE_SLICE_KEY]: ExampleState;
  [EXAMPLES_SLICE_KEY]: ExamplesState;
}

// This type helps ensure all actions follow flux standard actions (FSA) with a string `type` and an
// optional `payload`. The `payload` uses `any` to keep the typing of reducers simple. The redux
// documentation recommends using their `AnyAction` type, which allows for `any` values:
// https://redux.js.org/recipes/usage-with-typescript#type-checking-reducers. This action mimics
// `AnyAction` in concept, but enforces only a `payload` key with `any` value.
export interface Action extends ReduxAction<string> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type Store = ReduxStore<AppState, Action>;
export type Dispatch = ReduxDispatch<Action>;

// This type describes the shape of an entity. It should be used as a constraint on functions
// accepting entity generics.
export type EntityType<Entity> = Record<keyof Entity, Entity[keyof Entity]>;
// This represents an entity's id. The id should be a value on the entity, indexed by a key of the
// entity. It must also be a string.
export type EntityId<Entity> = Entity[keyof Entity] & string;
export type EntityMap<Entity> = Record<EntityId<Entity>, Entity>;

// This type should be used for the state of all entity reducers that house just a single entity.
export interface SingleEntityState<Entity> {
  entity: Entity;
  id: EntityId<Entity> | null;
  lastFetched: number | null;
}

// This type should be used for the state of all entity reducers that store multiple entities.
export interface MultiEntityState<Entity> {
  entities: EntityMap<Entity>;
  ids: Array<EntityId<Entity>>;
  lastFetched: number | null;
}
